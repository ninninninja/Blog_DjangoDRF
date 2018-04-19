$(document).ready(function(){

    let url = '/api/article/?page=1'; /*+ this + '/';*/
    alert('ready')
    $.get(url, function(data) {
        var arr = [];
        for (i = 0; i < data.results.length; i++) { 
            arr.push(i);
            }
        
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
            '<h2 class="post-title" id="post-title-'+i+'"></h2>',
            '<h3 class="post-subtitle" id="post-content-'+i+'"></h3>',
            '<p class="post-meta" id="post-time-'+i+'"></p>',
            '<hr>',
            '</div>');
            $('#post-img-'+i).attr('src', details[i].image);
            $('#post-title-'+i).text(details[i].title);
            $('#post-content-'+i).text(details[i].content);
            $('#post-time-'+i).text(details[i].modified);
        });
    });  
});

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