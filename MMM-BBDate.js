/* 
 *
 *   
 * MagicMirror Module - MMM-BBDate
 *  
 *  
 */

Module.register("MMM-BBDate", { 
      defaults: { 
         
        specials: "",
        message: "Welcome to the Bar",
		legal: "PUT YOUR MESSAGE IN YOUR CONFIG.JS<br>"
	  },
	
	   
	start: function() {
		Log.info("Starting module: " + this.name);
	},
	
	getScripts: function() {
		return ["moment.js", "moment-timezone.js"];
	},

	 
	getStyles: function() {
		return ["MMM-BBDate.css"];
    },  

	getDom: function() {
		var wrapper = document.createElement("div");
		
		var message = document.createElement("div");
		message.classList.add("message");
		message.innerHTML=this.config.message;
		wrapper.appendChild(message); 
		
		var y = moment().subtract('years', 21).format('MMMM DD, YYYY');
		
		var dateWrapper = document.createElement("div");
		dateWrapper.classList.add("date"); 
        dateWrapper.innerHTML = this.config.legal + y;
        wrapper.appendChild(dateWrapper);
		
		if (this.config.specials != ""){
		var spec=document.createElement("div");
		spec.classList.add("special");
		spec.innerHTML = this.config.specials;
		wrapper.appendChild(spec);
		} 
		
        return wrapper;
    }
});