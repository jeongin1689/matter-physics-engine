var Example = Example || {};

/**
 * Matter.js : airFriction 함수
 * 공기마찰을 표현한 기능
 * 
 * Example.airFriction은 함수의 한 종류
 * console.log(typeof Example.airFriction)
 * 갖다쓰기 편하라고 함수로 만들어놓은듯
 * 
 */

Example.airFriction = function() {

  // 모듈 종류
  let Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Composite = Matter.Composite,
  Bodies = Matter.Bodies;

  // 엔진 만들기 선언
  let engine = Engine.create(),
  world = engine.world;

  // 렌더러 만들기 선언
  let render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 800,
      height: 600,
      showVelocity: true
    }
  });

  // 렌더러 실행
  Render.run(render);

  // 러너 만들기
  let runner = Runner.create();

  // 엔진 실행
  Runner.run(runner, engine);

  // 바디 만들기 (바디 종류)
  Composite.add(engine.world, [
    // 떨어지는 네모들
    /**
     * frictionAir : 중력 가속도
     * 이외에도 여러가지 option 존재
     */
    Bodies.rectangle(200, 100, 60, 60, { frictionAir: 0.001 }),
    Bodies.rectangle(400, 100, 60, 60, { frictionAir: 0.05 }),
    Bodies.rectangle(600, 100, 60, 60, { frictionAir: 0.1 }),

    // 벽
    Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
    Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
    Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
    Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
  ]);

  // 마우스 컨트롤 추가하기 (이벤트)
  let mouse = Mouse.create(render.canvas),
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false
      }
    }
  });

  Composite.add(world, mouseConstraint);

  // 렌더링과 마우스 동기화 유지
  render.mouse = mouse;

  // 렌더링 뷰포트를 씬에 맞추기
  Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: 800, y: 600 }
  });
};

Example.airFriction();
