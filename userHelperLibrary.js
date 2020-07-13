import "./styles.css";

class UserHelperLibrary {
  constructor() {
    this.state = {
      opened: true
    }
  }

  domNode(){
    return `
      <div id="helperLibrary" class="userHelperLibrary">
        <div id="toggleHelper" class="user-helper-toogleButton">
          <i class="fas fa-universal-access"></i>
        </div>  
          <div class="user-helper-block" style="display: none">
            <div class="user-helper-content">
              <div class="user-helper-btn user-helper-topButton helperLogicBtn" data-option="helper-core-tabHighlight">
                <div class="user-helper-icon"><i class="far fa-keyboard"></i></div><span>Navigare pron tastatura</span>
              </div>
              <div class="user-helper-btn helperAnimationBtn" data-anim="paused">
                <div class="user-helper-icon"><i class="far fa-lightbulb"></i></div><span>Blocare animatii</span>
              </div>
            </div>
            <div class="user-helper-middleContent">
              <div class="user-helper-midBtn helperLogicBtn" data-option="helper-core-grey"><i class="fas fa-low-vision"></i><span>Tonuri de gri</span></div>
              <div class="user-helper-midBtn helperLogicBtn" data-option="helper-core-invert"><i class="fas fa-adjust"></i><span>Culori inversate</span></div>
              <div class="user-helper-midBtn helperLogicBtn" data-option="helper-core-underline"><i class="fas fa-link"></i><span>Linkuri subliniate</span></div>
              <div class="user-helper-midBtn helperLogicBtn" data-option="helper-core-zoom"><i class="fas fa-search-plus"></i><span>Marire</span></div>
              <div class="user-helper-midBtn helperLogicBtn" data-option="helper-core-blmouse"><i class="fas fa-mouse-pointer"></i>Cursor negru</div>
              <div class="user-helper-midBtn helperLogicBtn" data-option="helper-core-whmouse"><i class="fas fa-arrow-circle-up"></i> Cursor alb</div>
            </div>
            <div class="user-helper-midBtn helperLogicBtn" data-option="helper-core-titlesubline"><i class="fas fa-heading"></i><span>Titlurile subliniate</span></div>
            <div class="user-helper-content">
              <div class="user-helper-btn helper-btn-bottom helper-btn" data-option="">
                <span>Text: <button class="user-helper-fontBtn" data-font="15px">Mic</button>, <button class="user-helper-fontBtn" data-font="18px">Medium</button>, <button class="user-helper-fontBtn" data-font="20px">Mare</button> <button class="user-helper-fontBtn" data-font=""><i class="fas fa-sync-alt"></i></button></span>
              </div>
              <div class="user-helper-btn helper-btn-bottom user-helper-bottomButton restare-btn helper-btn" data-option="helper-core-grey helper-core-invert helper-core-underline helper-core-zoom helper-core-blmouse helper-core-titlesubline helper-core-tabHighlight helper-core-whmouse">
                <span>Resetare</span>
              </div>
            </div>
          </div>
      </div>
    `
  }

  toggleHelper(){
    this.state.opened = !this.state.opened;
    document.getElementsByClassName('user-helper-block')[0].style.display = this.state.opened ? 'none' : '';
  }

  createDom(){
    document.body.insertAdjacentHTML("afterbegin", `<div id="root-helper">${this.domNode()}</div>`);
    this.addListeners();
  }

  addListeners(){
    const toggleFontBtn = document.querySelectorAll(".user-helper-fontBtn");
    const toggleShowHelperBtn = document.getElementById("toggleHelper");
    const helperToggleOptionBtn = document.querySelectorAll(".helperLogicBtn");
    const restareBtn = document.querySelector(".restare-btn");
    const toggleAnimationBtn = document.querySelector(".helperAnimationBtn");
    toggleShowHelperBtn.addEventListener("click", ()=>{
      this.toggleHelper();
    });

    helperToggleOptionBtn.forEach((btn)=>{
      btn.addEventListener("click", function () {
        if(this.classList.contains("pressed-btn")){
          this.classList.remove("pressed-btn");
        } else {
          this.classList.add("pressed-btn");
        }
        if(document.body.classList.contains(this.dataset.option)){
          document.body.classList.remove(this.dataset.option);
        }else{
          document.body.classList.add(this.dataset.option);
        }
      })
    });

    restareBtn.addEventListener("click", function(){
      const options = this.dataset.option.split(" ");
      options.forEach(optionClass => document.body.classList.remove(optionClass));
      helperToggleOptionBtn.forEach(btn => btn.classList.remove("pressed-btn"));
      document.body.style.fontSize = "";
    });

    toggleFontBtn.forEach(btn =>{
      btn.addEventListener("click", function () {
        document.body.style.fontSize = this.dataset.font;
      })
    });

    let animFlag = true;
    toggleAnimationBtn.addEventListener("click", function () {
      document.body.style.animationPlayState = animFlag ? this.dataset.anim : "";
      animFlag = !animFlag;
      if(this.classList.contains("pressed-btn")){
        this.classList.remove("pressed-btn");
      } else {
        this.classList.add("pressed-btn");
      }
    });
  }
}

export default ()=>{
  if(!window.helperLibrary){
    const $helper = new UserHelperLibrary();
    $helper.createDom();
  }
}
