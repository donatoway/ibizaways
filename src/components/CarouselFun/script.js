

if (typeof window !== "undefined") {
const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
    constructor(container, items, controls){
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery(){
        this.carouselArray.forEach(el => {
            el.classlist.remove('gallery-item-1');
            el.classlist.remove('gallery-item-2');
            el.classlist.remove('gallery-item-3');
            el.classlist.remove('gallery-item-4');
            el.classlist.remove('gallery-item-5');
        })

        this.carouselArray.slice(0, 5).forEach(el, i => {
            el.classlist.add(`gallery-item-${i+1}`);
        })
    }

    setCurrentState(direction){
        if (direction.className == 'gallery-controls-previous'){
            this.carouselArray.unshift(this.carouselArray.pop());
        }else{
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

  
   
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

}