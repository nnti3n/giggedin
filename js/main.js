$("#promoCode").click(function(){
    $.ajax({url: "https://jsonplaceholder.typicode.com/users",
    success: function(result){
        var txt = "<table class='table'>";
        txt += "<thead><tr>"
        Object.keys(result[0]).map(key => {
            txt += `<th>${key}</th>`
        });
        txt += '</tr></thead>'
        result.map(item => {
            txt += "<tr>";
            Object.values(item).map(val => {
                if (typeof item == 'object') {
                    txt += `<td>${JSON.stringify(val)}</td>`
                } else {
                    txt += `<td>${val}</td>`
                }
                
            })
            txt += "</tr>";
        })
        txt += "</table>"
        $("#promoResult").html(txt);
    }});
  });