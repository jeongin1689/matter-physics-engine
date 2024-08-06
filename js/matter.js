/**
 * matter.js의 가장 기본이 되는 구조입니다.
 * 
 * 1. Engine : 물리엔진을 구현해주는 역할 / Matter.Engine 으로 선언
 * 2. Render : 공간 안에서 모듈들의 변화를 지속적으로 Canvas에 반복하여 애니메이션을 구현해주는 역할 / Matter.Render 으로 선언
 * 3. World : 이 물리엔진이 적용되는 공간
 * 4. Bodies : 공간 안에서 보여지는 모듈들 / Matter.Bodies 으로 선언
 * 5. Composite : 모듈들을 그룹으로 묶어 관리함 / Matter.Composite 으로 선언
 * 6. Runner : 엔진의 상태를 지속적으로 업데이트함 / Matter.Runner 으로 선언
 * 
 */

/** 아래 주석을 풀어 콘솔을 확인하면 Matter에서 지원하는 수많은 모듈기능들이 나오니 한번 확인 해보세요. */
//console.log(Matter);

// 모듈 종류
var Engine = Matter.Engine,
Render = Matter.Render,
Runner = Matter.Runner,
Bodies = Matter.Bodies,
Composite = Matter.Composite;

// 엔진 만들기 선언
var engine = Engine.create();

// 렌더러 만들기 선언
var render = Render.create({
element: document.body,
engine: engine
});

// 바디 만들기 (바디 종류)
const bodies = [
  // 아래는 화면안에 그려지는 원과 사각형임
  Bodies.circle(200, 10, 30, 40),
  Bodies.rectangle(350, 50, 80, 80),
  Bodies.rectangle(450, 50, 100, 100),
  // 아래는 바디를 받쳐줄 벽임
  Bodies.rectangle(400, 610, 810, 60, { isStatic: true }),
];
// 위 선언한 bodies 보여주기
Composite.add(engine.world, bodies);

// 렌더러 실행
Render.run(render);

// 러너 만들기
var runner = Runner.create();

// 엔진 실행
Runner.run(runner, engine);

