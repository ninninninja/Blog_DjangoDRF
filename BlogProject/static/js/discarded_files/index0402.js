$(document).ready(function(){
    alert('test4321');
    let url = '/api/article/'; /*+ this + '/';*/
    $.get(url, function(data) {
        $.each(data, function(i) {
            alert(data.length);
            alert(data[i].image);
            $('.post-preview').append(
            '<div class="preview-block">',
            '<img class="img-rounded" id="post-img-'+i+'">',
            '<h2 class="post-title" id="post-title-'+i+'">ok</h2>',
            '<h3 class="post-subtitle" id="post-content-'+i+'">22</h3>',
            '<p class="post-meta" id="post-time-'+i+'">33</p>',
            '<hr>',
            '</div>');
            $('#post-img-'+i).attr('src', 'girl.jpg');
            alert($('#post-img-'+i).attr('src'));
            $('#post-title-'+i).text(data[i].title);
            $('#post-content-'+i).text(data[i].content);
            $('#post-time-'+i).text(data[i].modified);
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