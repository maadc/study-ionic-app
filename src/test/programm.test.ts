import { ProgrammPage } from '../app/programm/programm.page';

describe('accordion', () => {
  it('should change class + maxHeight = null', () => {

    document.body.innerHTML = `
      <button id="test"></button>
      <div id="panel-test" style="max-height: 500px;"></div>
      `;

    ProgrammPage.Akkordion("test");
    expect(document.getElementById("test").className).toBe("active");
    expect(document.getElementById("panel-test").style.maxHeight).toBe("");
  });

  it('should change class + maxHeight = 0px', () => {

    document.body.innerHTML = `
      <button id="test"></button>
      <div id="panel-test" style=""></div>
      `;

    ProgrammPage.Akkordion("test");
    expect(document.getElementById("test").className).toBe("active");
    expect(document.getElementById("panel-test").style.maxHeight).toBe("0px");
  });
});