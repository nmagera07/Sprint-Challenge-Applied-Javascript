class Carousel {
  constructor() {
    this.rightButton = document.querySelector(".right-button")
    this.leftButton = document.querySelector(".left-button")
    let boxes = document.querySelectorAll(".carousel")
    this.selectedBox = boxes[0].

    this.rightButton.addEventListener('click', () => this.rightClick())
    this.leftButton.addEventListener('click', () => this.leftClick())
  }

  leftClick() {
    this.boxes[this.selectedBox].classList.remove("carousel-selected")
    this.selectedBox--;
    if(this.selectedBox < 0) {
      this.selectedBox = this.boxes.length -1;
    }
    this.boxes[this.selectedBox].classList.add('carousel-selected')
  }

  rightClick() {
    this.boxes[this.selectedBox].classList.remove("carousel-selected")
    this.selectedBox++;
    if(this.selectedBox >= this.boxes.length) {
      this.selectedBox = 0;
    }
    this.boxes[this.selectedBox].classList.add('carousel-selected')
  }
}

// let carousel = document.querySelector();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
