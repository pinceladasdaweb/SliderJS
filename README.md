[SliderJS](http://www.pinceladasdaweb.com.br/blog/uploads/slider/)
=================

jQuery Slider with CSS Transitions

##Usage

1. Paste right before your page's closing `</body>` tag
```html
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
<script type="text/javascript" src="assets/js/slider.min.js"></script>
```

2. From within a script tag or a JS file
```javascript
Slider.init({
	target: $('.slider'), // domNode to attach to
	time: 6000            // Range for the next transition in milliseconds. Default 5000.
});
```

##HTML

The HTML structure damn slide is as listed below:

```html
<div class="slider">
    <div class="slider-container">
        <div class="slider-warpper">
            <div class="slide">
                <!-- html here -->
            </div>
            <div class="slide">
                <!-- html here -->
            </div>
            <div class="slide">
                <!-- html here -->
            </div>
            <div class="slide">
                <!-- html here -->
            </div>
        </div>
    </div>
</div>
```

##CSS

The minimum CSS slide should be as below:

```CSS
.slider-container {
    height: 425px; // The height of the slide
    overflow: hidden;
    position: relative;
    width: 990px; // The width of the slide
}

.slider-container .slider-warpper {
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 5000em; /*Fix for prevent display errors*/

    // The range of the transition
    -webkit-transition: all 800ms ease;
       -moz-transition: all 800ms ease;
         -o-transition: all 800ms ease;
            transition: all 800ms ease;
}

.slider-container .slide {
    float: left;
    overflow: hidden;
    position: relative;
}
```

##Compatibility

The transitions occur via CSS in browsers that have support for CSS Transitions, otherwise they are carried through the jQuery animate.

##Browser Support

* IE7+ (If used jQuery 1.10.1 or greater)
* Opera
* Google Chrome
* Safari
* Firefox