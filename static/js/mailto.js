;(function() {

  var mailto = {

    config: {
      at: 'AT',
      dot: 'DOT'
    },

    mail: function() {
      var mail = mailto.$('.mail');
      for(var i=0; i<mail.length; i++) {
        mail[i].onmouseover = mailto.onmouseover;
        mail[i].onmouseout = mailto.onmouseout;
      }
    },

    onmouseover: function() {
      this.className = 'mailto';
      this.parentNode.href = this.parentNode.href
          .replace(mailto.config.at, '@')
          .replace(mailto.config.dot, '.');
      this.innerHTML = this.parentNode.href
          .replace('mailto:', '');
    },

    onmouseout: function() {
      this.className = 'mail';
      this.parentNode.href = this.parentNode.href
          .replace('@', mailto.config.at)
          .replace('.', mailto.config.dot);
      this.innerHTML = '';
    },

    $: function(selector) {
      return document.querySelectorAll(selector);
    }

  };
  mailto.mail();

})();
