/**
 * DokuWiki PrettyPhoto Plugin
 */
jQuery(function() {
     jQuery('a[class=media][href]').each(function() {
        var $self = jQuery(this);
        var img =  $self.find('img');
        if (!img.length) {
            return false;
        };
        var ppath = JSINFO.plugin_prettyphoto.mediapath;
        if(typeof PRETTYPHOTO_PLUGIN_MEDIAPATH !== "undefined") { 
            ppath = PRETTYPHOTO_PLUGIN_MEDIAPATH;
        };
        if ($self.attr("href").indexOf(ppath) != -1) {
            // Points directly to a media item
            $self.attr("rel", "prettyPhoto[gallery]");
        };
    });
    var pparams = {};
    if(typeof PRETTYPHOTO_PLUGIN_PARAMS !== "undefined") { 
        pparams = PRETTYPHOTO_PLUGIN_PARAMS;
    };
    jQuery("a[rel^='prettyPhoto']").prettyPhoto(pparams);
});
