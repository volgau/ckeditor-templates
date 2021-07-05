// Register a templates definition set named "default".
CKEDITOR.addTemplates ('default', {

	// The name of sub folder which hold the shortcut preview images
    imagesPath: CKEDITOR.getUrl (CKEDITOR.plugins.getPath ("templates") + "templates/images/"),

	templates: [
        {
            title: "YouTube video",
            description: 'YouTube video inside Bootstrap embed-responsive container.',
            html:
                '<div class="embed-responsive embed-responsive-16by9">' +
                    '<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" src="https://www.youtube.com/embed/ABCDEFGH"></iframe>' +
                '</div>'
        },
        {
            title: 'Image thumbnail with lightbox',
            description: 'Image thumbnail with the full image opens in the blueimp Gallery lightbox.',
            html:
                '<p>' +
                    '<a data-gallery="" href="/dnnimagehandler.ashx?mode=file&file=/Portals/0/images/logo2.png&w=200" title="DNN Platform">' +
                        '<img class="img-thumbnail" alt="DNN" src="/Portals/0/images/logo2.png" />' +
                    '</a>' +
                '</p>'
        },
        {
            title: 'Bootstrap blockquote',
            description: 'Simple Bootstrap blockquote.',
            html:
                '<blockquote class="blockquote">' +
                    '<p>Lorem ipsum dolor sit amet.</p>' +
                '</blockquote>'
        },
        {
            title: 'Bootstrap blockquote with a footer',
            description: 'Bootstrap blockquote with a footer.',
            html:
                '<blockquote class="blockquote">' +
                    '<p class="mb-0">Lorem ipsum dolor sit amet.</p>' +
                    '<footer class="blockquote-footer">' +
                        'Someone famous in' +
                        '<cite title="Source Title">' +
                            'Source Title' +
                        '</cite>' +
                    '</footer>' +
                '</blockquote>'
        },
        {
            title: 'Bootstrap table (responsive)',
            description: 'Bootstrap table inside responsive div.',
            html:
                '<div class="table-responsive">' +
                    '<table class="table table-bordered table-striped table-hover">' +
                        '<thead>' +
                            '<tr>' +
                                '<th>Column 1</th>' +
                                '<th>Column 2</th>' +
                            '</tr>' +
                        '</thead>' +
                        '<tbody>' +
                            '<tr>' +
                                '<td>Data 1</td>' +
                                '<td>Data 2</td>' +
                            '</tr>' +
                        '</tbody>' +
                    '</table>' +
                '</div>'
        }
    ]
});
