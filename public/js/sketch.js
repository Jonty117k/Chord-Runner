
var horizon;
var obstacleSpeed;

var score=0;
var obstacles = [];

var dino;

var gameOver;

var gameState = false;

    var obj = document.createElement("audio");
    obj.src = "http://noproblo.dayjo.org/ZeldaSounds/OOT/OOT_Secret_Mono.wav";
    obj.volume = 0.01;
    obj.autoPlay = false;
    obj.preLoad = true;
    obj.controls = true;

    var obj1 = document.createElement("audio");
    obj1.src = "http://noproblo.dayjo.org/ZeldaSounds/MC/MC_Link_Jump.wav";
    obj1.volume = 0.01;
    obj1.autoPlay = false;
    obj1.preLoad = true;
    obj1.controls = true;

	//chord card object
var sixthChords = [
		{name:'A6', src:"guitar-chord-charts\6ths\a6.png"},
		{name:'B6', src:'guitar-chord-charts\6ths\b6.png'},
		{name:'C6', src:'guitar-chord-charts\6ths\c6.png'},
		{name:'D6', src:'guitar-chord-charts\6ths\d6.png'},
		{name:'E6', src:'guitar-chord-charts\6ths\e6.png'},
		{name:'F6', src:'guitar-chord-charts\6ths\f6.png'},
		{name:'G6', src:'guitar-chord-charts\6ths\g6.png'},
		{name:'Gmin6', src:'guitar-chord-charts\6ths\g_min_6.png'}
	];
var SeventhChords = [
		{name:'A dom 7th', src:'a_dom_7.png'},
		{name:'A maj 7th', src:'a_maj_7.png'},
		{name:'A min 7th', src:'a_min_7.png'},
		{name:'B dom 7th', src:'b_dom_7.png'},
		{name:'B maj 7th', src:'b_maj_7.png'},
		{name:'B min 7th', src:'b_min_7.png'},
		{name:'C dom 7th', src:'c_dom_7.png'},
		{name:'C maj 7th', src:'c_maj_7.png'},
		{name:'F dom 7th', src:'f_dom_7.png'},
		{name:'F maj 7th', src:'f_maj_7.png'},
		{name:'F min 7th', src:'f_min_7.png'},
		{name:'G dom 7th', src:'g_dom_7.png'},
		{name:'G maj 7th', src:'g_maj_7.png'},
	];
var NinthChords = [
		{name:'E dom 9th', src:'e_dom9.png'},
		{name:'C maj 9th', src:'c_maj9.png'},
		{name:'C min 9th', src:'c_min9.png'},
		{name:'F dom 9th', src:'f_dom9.png'},
		{name:'G dom 9th', src:'g_dom9.png'},
	];
var EleventhChords = [
		{name:'D11', src:'d11.png'},
		{name:'G11', src:'g11.png'},
	];
var ThirteenthChords = [
		{name:'G13', src:'g13th.png'}
	];
var basicChords = [
		{name:'A Major', src:'guitar-chord-charts/basic/a_maj.png'},
		{name:'A Minor', src:'guitar-chord-charts/basic/a_min.png'},
		{name:'B Major', src:'guitar-chord-charts/basic/b_maj.png'},
		{name:'B Minor', src:'guitar-chord-charts/basic/b_min.png'},
		{name:'C Major', src:'guitar-chord-charts/basic/c_maj.png'},
		//{name:'C Minor', src:'guitar-chord-charts/basic/c_min.png'},
		{name:'D Major', src:'guitar-chord-charts/basic/d_maj.png'},
		{name:'D Minor', src:'guitar-chord-charts/basic/d_min.png'},
		{name:'E Major', src:'guitar-chord-charts/basic/e_maj.png'},
		{name:'E Minor', src:'guitar-chord-charts/basic/e_min.png'},
		{name:'F Major', src:'guitar-chord-charts/basic/f_maj.png'},
		{name:'F Minor', src:'guitar-chord-charts/basic/f_min.png'},
		{name:'G Major', src:'guitar-chord-charts/basic/g_maj.png'},
		{name:'G Minor', src:'guitar-chord-charts/basic/g_min.png'},		
	];
// var JazzChords = {
// 		'dim': [
// 			{name:'G diminished 7th', src:'g-dim7-j-1.png'},
// 			{name:'G diminished 7th', src:'g-dim7-j-2.png'},
// 			{name:'G diminished 7th', src:'g-dim7-j-3.png'},
// 		],
// 		'dom': [
// 			{name:'G dominant 7th', src:'g7-j-1.png'},
// 			{name:'G dominant 7th', src:'g7-j-2.png'},
// 			{name:'G dominant 7th', src:'g7-j-3.png'},
// 			{name:'G9', src:'g9-j-1.png'},
// 			{name:'G9', src:'g9-j-2.png'},
// 			{name:'G9', src:'g9-j-3.png'},
// 			{name:'G13', src:'g13-j-1.png'},
// 		],
// 		'half-dim': [
// 			{name:'G minor 7 b5', src:'gm7b5-j-1'},
// 			{name:'G minor 7 b5', src:'gm7b5-j-2'},
// 			{name:'G minor 7 b5', src:'gm7b5-j-3'},
// 		],
// 		'maj': [
// 			{name:'G 6/9', src:'g6.9-j'},
// 			{name:'G6', src:'g6-j-1'},
// 			{name:'G6', src:'g6-j-3'},
// 			{name:'G Major 7th', src:'gmaj7-j-1'},
// 			{name:'G Major 7th', src:'gmaj7-j-2'},
// 			{name:'G Major 7th', src:'gmaj7-j-3'},
// 			{name:'G Major 7th', src:'gmaj7-j-4'},
// 			{name:'G Major 7th', src:'gmaj7-j-5'},
// 			{name:'G Major 7th', src:'gmaj7-j-6'},
// 			{name:'G Major 9th', src:'gmaj9-j-1'},
// 		],
// 		'min': [
// 			{name:'G Minor 6th', src:'gm6-j-1'},
// 			{name:'G Minor 7th', src:'gm7-j-1'},
// 			{name:'G Minor 7th', src:'gm7-j-2'},
// 			{name:'G Minor 9th', src:'gm9-j-1'},
// 			{name:'G Minor 9th', src:'gm9-j-2'},
// 			{name:'G Minor 9th', src:'gm9-j-3'},
// 			{name:'G Minor 11th', src:'gm11-j-1'},
// 		]
// 	};

	//scoreboard
function scoreBoard() {
	score.parent('score-board');
}

var choices = ['a', 'b', 'c', 'd'];

var rightAnswer;

	//set up chord quiz
function getCard() {

	var basicChords = [
			{name:'A Major', src:'guitar-chord-charts/basic/a_maj.png'},
			{name:'A Minor', src:'guitar-chord-charts/basic/a_min.png'},
			{name:'B Major', src:'guitar-chord-charts/basic/b_maj.png'},
			{name:'B Minor', src:'guitar-chord-charts/basic/b_min.png'},
			{name:'C Major', src:'guitar-chord-charts/basic/c_maj.png'},
			//{name:'C Minor', src:'guitar-chord-charts/basic/c_min.png'},
			{name:'D Major', src:'guitar-chord-charts/basic/d_maj.png'},
			{name:'D Minor', src:'guitar-chord-charts/basic/d_min.png'},
			{name:'E Major', src:'guitar-chord-charts/basic/e_maj.png'},
			{name:'E Minor', src:'guitar-chord-charts/basic/e_min.png'},
			{name:'F Major', src:'guitar-chord-charts/basic/f_maj.png'},
			{name:'F Minor', src:'guitar-chord-charts/basic/f_min.png'},
			{name:'G Major', src:'guitar-chord-charts/basic/g_maj.png'},
			{name:'G Minor', src:'guitar-chord-charts/basic/g_min.png'},		
		];	

	var choices = ['a', 'b', 'c', 'd'];

	count=0;

	for (i=0; i < 3; i++) {

		var randomChord = basicChords[Math.floor(Math.random() * basicChords.length)];
		//console.log(randomChord.name);

		basicChords.splice(basicChords.indexOf(randomChord), 1);

		var randomChoice = choices[Math.floor(Math.random() * choices.length)];
		//console.log(randomChoice);

		choices.splice(choices.indexOf(randomChoice), 1);
		//console.log(choices);

		$('#' + randomChoice + '').text(randomChord.name);

		count++;

		if(count === 3) {
			rightAnswer = choices[0];

			console.log("the right answer is: " + rightAnswer);

			randomChord = basicChords[Math.floor(Math.random() * basicChords.length)];

			$('#' + rightAnswer + '').text(randomChord.name);

			$('#chord-ex').attr('src', randomChord.src);
		}
	}
}
	//multiple choice timer
var myTime;

function myTimer() {
    myTime = setTimeout(function(){ endGame(); }, 5000);
}

function setup() {

  var canvas = createCanvas(800, 300);

  canvas.parent('sketch-holder');

  textAlign(CENTER);

  horizon = height - 40;

  score = 0;
  gameOver = false;
  obstacleSpeed = 6;

  var size = 20;
  dino = new TRex(size * 2, height - horizon, size);

  textSize(20);
}

function draw() {

  background('#d80027');

  drawHUD();

  handleLevel(frameCount);

  dino.update(horizon);

  handleObstacles();
}

/**
	* draws horizon & score
	*/
function drawHUD() {

  /* draw horizon */
  stroke(255);
  strokeWeight(2);
  line(0, horizon, width, horizon);

	/* draw score */
  noStroke();
  // text("Score: " + score, width / 2, 30);
	/* draw T-Rex */
  dino.draw();
}

/**
	*	updates, draws, and cleans out the obstacles
	*/
function handleObstacles() {

  for (var i = obstacles.length - 1; i >= 0; i--) {

		obstacles[i].update(obstacleSpeed);
		obstacles[i].draw();

		if (obstacles[i].hits(dino)) // if there's a collision
			endGame();

    if (!obstacles[i].onScreen) // if it's no longer showing
      obstacles.splice(i, 1); // delete from array
  }
}


	//speeds game up, pushes new obstacles, & handles score

function handleLevel(n) {

  if (n % 30 === 0) { // every 0.5 seconds

    var n = noise(n); // noisey

    if (n > 0.5)
      newObstacle(n); // push new obstacle

	  if (n % 120 === 0) // every 2 seconds
	    obstacleSpeed *= 1.05; // speed up
  }
}

	//pushes random obstacle
function newObstacle(n) {

  var col = color('#d80027');
  var size = random(20) + 20;
  var obs = new Obstacle(width + size, size, horizon, col);

  obstacles.push(obs);
}

function emptyQuiz() {
	
	$('#a').text('');
	$('#b').text('');
	$('#c').text('');
	$('#d').text('');
	$('#chord-ex').attr('src', ' ');
}

var answer;

function mousePressed() {

	obj1.play();

	if(gameOver === false) {
		if (dino.onGround === true) {
			dino.jump();
			score++;
			console.log(score);
			$('#score-board').html(score);	
		}
	}
	if (score % 5 === 0 && dino.onGround === true) {
		setTimeout(function(){
			noLoop();
			getCard();
			myTimer();
			$('#timer').show();
			$('.answer-box').on('click', function() {
				answer=$(this).attr('id');
				console.log(answer);
				if (answer === rightAnswer){
					clearTimeout(myTime);
					emptyQuiz();
					loop();
					obj.play();
					$('#timer').hide();

				}else{
					endGame();
					emptyQuiz();
					$('#timer').hide();
				}
			});
		}, 475)
			score=score*2;	
	}
	if (gameOver === true) {
		reset();
	}
}

	//pause game
function keyPressed() {
	if (keyCode === 27 && gameState===false) {
		noLoop();
		gameState=true;
	}
	if (keyCode === 27 && gameState===true) {
		loop();
		gameState=false;
	}
}


function endGame() {
  gameOver=true;
  noLoop();
  noStroke();
  textSize(40);
  text("GAME OVER", width / 2, height / 2);
  textSize(20);
  //text("Click to restart", width / 2, height / 2 + 20);
}