// https://github.com/WebReflection/document-register-element
require("document-register-element");

(function() {
    //Get the contents of the template (_currentScript is available with webcomponents.js, use currentScript if you don't use this Polyfill)
    //var template = document._currentScript.ownerDocument.querySelector('template');
    //Create a prototype for this component
    var proto = Object.create( HTMLElement.prototype, {
    	createdCallback : {
	    	value: function() {
	            //Grab the contents of the template
	            //var clone = document.importNode(template.content, true);
	            //Add the template contents to the shadow DOM
	            //this.createShadowRoot().appendChild(clone);          
	        },
	        enumerable:false
	    },
	    attachedCallback : {
	    	value: function() {
    	    	this.innerHTML = "My component";
    	    	this.style.background = "rgb("+(parseInt(Math.random()*255))+","+(parseInt(Math.random()*255))+","+(parseInt(Math.random()*255))+")";
    	    },
    	    enumerable:false
	    }
    });

    //Register the element with the document
    document.registerElement('my-elem', {prototype: proto});
}());