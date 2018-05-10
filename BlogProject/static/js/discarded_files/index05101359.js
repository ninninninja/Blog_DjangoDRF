function ShowArticles(data) {
        var arr = [];
        for (i = 0; i < data.results.length; i++) { 
                arr.push(i);
            };
            
        $('#container-expand').empty();
        
        $.each(arr, function(i) {
            var details = data.results
            $('#container-expand').append(
            '<div class="row row-expand">',
            '<div class="col-xs-6 col-md-4 mx-auto" id="img-preview-'+i+'"></div>',
            '<div class="col-xs-12 col-md-8 mx-auto" id="post-preview-'+i+'"></div>',
            '</div>'
            )
            
            $('#img-preview-'+i).append(
            '<img class="img-rounded" id="post-img-'+i+'">',
            )
            $('#post-preview-'+i).append(
            '<div class="preview-block">',
            '<a type="button" class="article-link" id="'+i+'"><h2 class="post-title" id="post-title-'+i+'"></h2></a>',
            '<h3 class="post-subtitle article-list" id="post-content-'+i+'"></h3>',
            '<p class="post-meta" id="post-time-'+i+'"></p>',
            '<hr>',
            '</div>');
            $('#post-img-'+i).attr('src', details[i].image);
            $('#post-title-'+i).text(details[i].title);
            $('#post-content-'+i).text(details[i].content_brevity);
            $('#post-time-'+i).text(details[i].modified);
        });
    };


$(document).ready(function(){

    let url = '/api/article/'; /*+ this + '/';*/
    $.get(url, function(data) {
        alert('update05101501');
            
        ShowArticles(data);
        
        if (data.total_pages > 1) {
            for (i = 1; i < data.total_pages+1; i++) {
                $('#page-expand').append(
                '<a type="button" class="page-button" id="'+i+'">'+i+
                '<span class="sr-only">(current)</span></a>',
                )
            };
            
            $('.page-button').click(function () {
                let page = $(this).attr('id');
                let sub_url = '/api/article/?page='+page;
                alert(sub_url);
                $.get(sub_url, function(data) {
                    ShowArticles(data);
                });
            });
        };
        
        $('.article-link').click( function () {
            alert('tterst');
            var select_article = $(this).attr('id');
            alert(select_article);
            $.ajax({
                url: '/api/article/',
                method: 'GET'
            }).success(function (data, textStatus, jqXHR) {
                window.location = 'https://www.google.com/?hl=zh-tw';
            }).error(function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR)
            });
        });
          
    });
});
/*                url: '/api/article/' + id + '/',
                method: 'GET'
                */
/*let table = $('#datatables').DataTable({
    "processing": true,
    "serverSide": true,
    "ajax": {
        "url": "/api/music/",
        "type": "GET"
    },
    "columns": [
        {"data": "id"},
        {"data": "song"},
        {"data": "singer"},
        {"data": "last_modify_date"},
        {"data": "created"},
        {
            "data": null,
            "defaultContent": '<button type="button" class="btn btn-info">Edit</button>' + '&nbsp;&nbsp' +
            '<button type="button" class="btn btn-danger">Delete</button>'
        }
    ]
});

let id = 0;

$('#datatables tbody').on('click', 'button', function () {
    let data = table.row($(this).parents('tr')).data();
    let class_name = $(this).attr('class');
    if (class_name == 'btn btn-info') {
        // EDIT button
        $('#song').val(data['song']);
        $('#singer').val(data['singer']);
        $('#type').val('edit');
        $('#modal_title').text('EDIT');
        $("#myModal").modal();
    } else {
        // DELETE button
        $('#modal_title').text('DELETE');
        $("#confirm").modal();
    }

    id = data['id'];

});

$('form').on('submit', function (e) {
    e.preventDefault();
    let $this = $(this);
    let type = $('#type').val();
    let method = '';
    let url = '/api/music/';
    if (type == 'new') {
        // new
        method = 'POST';
    } else {
        // edit
        url = url + id + '/';
        method = 'PUT';
    }

    $.ajax({
        url: url,
        method: method,
        data: $this.serialize()
    }).success(function (data, textStatus, jqXHR) {
        location.reload();
    }).error(function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR)
    });
});

$('#confirm').on('click', '#delete', function (e) {
    $.ajax({
        url: '/api/music/' + id + '/',
        method: 'DELETE'
    }).success(function (data, textStatus, jqXHR) {
        location.reload();
    }).error(function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR)
    });
});


$('#new').on('click', function (e) {
    $('#song').val('');
    $('#singer').val('');
    $('#type').val('new');
    $('#modal_title').text('NEW');
    $("#myModal").modal();
});

*/