import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss'],
  
})

export class FoodItemComponent implements OnInit {

  @Input() foodItem;

  @Output()likeChanged = new EventEmitter();

  toggleText = 'Aime';

  isLiked = false;
  likedFeatured = 'liked featured';

  showDescription = true;
  descriptionItalic = true;
  descriptionCaps = true;
  descriptionBordered = false;
  descriptionLargeFont = true;

  nutritionalFacts = '';

  constructor() { }

  ngOnInit() {
  }

  setFoodDescriptionCss() {
    let classes = {
      italic: this.descriptionItalic,
      caps: this.descriptionCaps
    }
    return classes;
  }

  setFoodDescriptionControl() {
    let styles = {
      'border': this.descriptionBordered ? "3px solid black" :  'none',
      'fond-size': this.descriptionLargeFont ? "large": 'medium',
      'font-style': this.descriptionItalic ? "italic": 'default'
    }
    return styles;
  }

  onLikeButtonPressed($event) {

    const title = $event.target.textContent;
    if (title === 'Like'){
      $event.target.textContent = 'UnLike';
      this.isLiked = true;
    } else {
      $event.target.textContent = 'Like';
      this.isLiked = false;
    }
    this.likeChanged.emit(this.isLiked);
  }

  // Temporaire
  onToggleButton() {
    if (this.toggleText === 'Aime'){
      this.toggleText = 'Deteste';
    } else {
      this.toggleText = 'Aime';
    }
  }
}
