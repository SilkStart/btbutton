// SilkStart is using this version of the plugin:
// https://github.com/smonetti/btbutton/pull/9/commits/9326186f625fc067a5f7ae2b73123e1f9b5d2332

(function () {

    CKEDITOR.plugins.add('btbutton', {
            lang: 'en',
            requires: 'widget,dialog',
            icons: 'btbutton',
            init: function (editor) {
                // Allow any attributes.
                editor.config.extraAllowedContent = '*(*);*{*}';
                var lang = editor.lang.btbutton;

                CKEDITOR.dialog.add('btbutton', this.path + 'dialogs/btbutton.js');

                // Add widget
                editor.ui.addButton('btbutton', {
                    label: lang.buttonTitle,
                    command: 'btbutton',
                    icon: this.path + 'icons/btbutton.png'
                });

                editor.widgets.add('btbutton', {
                    dialog: 'btbutton',

                    init: function () {
                        var $el = jQuery(this.element.$);

                        if ($el.hasClass("btn-link")) {
                          this.data.btntype = "btn-link";
                        } else if ($el.hasClass("btn-default")) {
                          this.data.btntype = "btn-default";
                        } else if ($el.hasClass("btn-primary")) {
                          this.data.btntype = "btn-primary";
                        } else if ($el.hasClass("btn-info")) {
                          this.data.btntype = "btn-info";
                        } else if ($el.hasClass("btn-success")) {
                          this.data.btntype = "btn-success";
                        } else if ($el.hasClass("btn-warning")) {
                          this.data.btntype = "btn-warning";
                        } else if ($el.hasClass("btn-danger")) {
                          this.data.btntype = "btn-danger";
                        }

                        if ($el.hasClass("btn-xs")) {
                          this.data.btnsize = "btn-xs";
                        } else if ($el.hasClass("btn-sm")) {
                          this.data.btnsize = "btn-sm";
                        } else if ($el.hasClass("btn-lg")) {
                          this.data.btnsize = "btn-lg";
                        }

                        this.data.href = $el.attr('href');

                        this.data.target = $el.attr('target');

                        this.data.text = jQuery('.text', $el).text();

                        var bs_icon_left = jQuery('.bs-icon-left', $el);
                        var bs_icon_right = jQuery('.bs-icon-right', $el);
                        var fa_icon_left = jQuery('.fa-icon-left', $el);
                        var fa_icon_right = jQuery('.fa-icon-right', $el);

                        if (bs_icon_left.length > 0) {
                          bs_icon_left.removeClass('bs-icon-left').removeClass('glyphicon');
                          this.data.bsiconleft = bs_icon_left.attr('class');
                          bs_icon_left.addClass('bs-icon-left').addClass('glyphicon');
                        }

                        if (bs_icon_right.length > 0) {
                          bs_icon_right.removeClass('bs-icon-right').removeClass('glyphicon');
                          this.data.bsiconright = bs_icon_right.attr('class');
                          bs_icon_right.addClass('bs-icon-right').addClass('glyphicon');
                        }

                        if (fa_icon_left.length > 0) {
                          fa_icon_left.removeClass('fa-icon-left').removeClass('fa');
                          this.data.faiconleft = fa_icon_left.attr('class');
                          fa_icon_left.addClass('fa-icon-left').addClass('fa');
                        }

                        if (fa_icon_right.length > 0) {
                          fa_icon_right.removeClass('fa-icon-right').removeClass('fa');
                          this.data.faiconright = fa_icon_right.attr('class');
                          fa_icon_right.addClass('fa-icon-right').addClass('fa');
                        }
                    },

                    template: '<a class="btn">' + '<span class="text"></span>' + '</a>',

                    data: function () {
                        var $el = jQuery(this.element.$);

                        if (this.data.btntype) {
                            $el.removeClass('btn-link btn-default btn-primary btn-info btn-success btn-warning btn-danger').addClass(this.data.btntype);
                        }

                        if (this.data.btnsize) {
                            $el.removeClass('btn-xs btn-sm btn-lg').addClass(this.data.btnsize);
                        }

                        if (this.data.href) {
                            $el.attr('href', this.data.href);
                        }

                        if (this.data.target && this.data.target != '') {
                            $el.attr('target', this.data.target);
                        }

                        if (this.data.text) {
                            jQuery('.text', $el).text(this.data.text);
                        }

                        if (this.data.hasOwnProperty('bsiconleft')) {
                            jQuery('.bs-icon-left', $el).remove();
                            if (this.data.bsiconleft) {
                                $el.prepend('<span class="bs-icon-left glyphicon ' + this.data.bsiconleft + '"></span>');
                            }
                        }

                        if (this.data.hasOwnProperty('bsiconright')) {
                            jQuery('.bs-icon-right', $el).remove();
                            if (this.data.bsiconright) {
                                $el.append('<span class="bs-icon-right glyphicon ' + this.data.bsiconright + '"></span>');
                            }
                        }

                        if (this.data.hasOwnProperty('faiconleft')) {
                            jQuery('.fa-icon-left', $el).remove();
                            if (this.data.faiconleft) {
                                $el.prepend('<i class="fa fa-icon-left ' + this.data.faiconleft + '"></i>');
                            }
                        }

                        if (this.data.hasOwnProperty('faiconright')) {
                            jQuery('.fa-icon-right', $el).remove();
                            if (this.data.faiconright) {
                                $el.append('<i class="fa fa-icon-right ' + this.data.faiconright + '"></i>');
                            }
                        }
                    },

                    requiredContent: 'a(btn)',

                    upcast: function (element) {
                        return element.name == 'a' && element.hasClass('btn');
                    }
                });
            }
        }
    );

})();
