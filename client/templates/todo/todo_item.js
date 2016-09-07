Template.todoItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  },
  checked: function() {
     b = this.complete;
     if(b == 1) {
        return "checked";
     } else {
         return null;
     }
  }
});