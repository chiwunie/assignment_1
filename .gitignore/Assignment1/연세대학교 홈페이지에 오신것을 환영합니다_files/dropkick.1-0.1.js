/**
 * DropKick
 *
 * Highly customizable <select> lists
 * https://github.com/JamieLottering/DropKick
 *
 * 짤 2011 Jamie Lottering <http://github.com/JamieLottering>
 *                        <http://twitter.com/JamieLottering>
 * 
 */
(function ($, window, document) {

  var ie6 = false;
  
	if(typeof(rootPath) == 'undefined') {
			rootPath = '';  
	}

  // Help prevent flashes of unstyled content
  if (($.browser.msie && $.browser.version.substr(0, 1) < 8) || $.browser.ismobile) {
    ie6 = true;
  } else {
    document.documentElement.className = document.documentElement.className + ' dk_fouc';
  }
  
  var
    // Public methods exposed to $.fn.dropkick()
    methods = {},

    // Cache every <select> element that gets dropkicked
    lists   = [],

    // Convenience keys for keyboard navigation
    keyMap = {
      'left'  : 37,
      'up'    : 38,
      'right' : 39,
      'down'  : 40,
      'enter' : 13
    },

    // HTML template for the dropdowns
    dropdownTemplate = [
      '<div class="dk_container" id="dk_container_{{ id }}" tabindex="{{ tabindex }}">',
        '<a class="dk_toggle" href="#dropKick">',
          '<span class="dk_label">{{ label }}</span><img src="'+rootPath+'/_common/img/dk_arrows.png" alt=""/>',
        '</a>',
        '<div class="dk_options">',
          '<ul class="dk_options_inner">',
          '</ul>',
        '</div>',
      '</div>'
    ].join(''),

    // HTML template for dropdown options
    optionTemplate = '<li class="{{ current }}"><a data-dk-dropdown-value="{{ value }}">{{ text }}</a></li>',

    // Some nice default values
    defaults = {
      startSpeed : 1000,
      theme      : false,
      change     : $.noop,
      onRender   : $.noop,
			selected	 : $.noop
    }
  ;

  // Called by using $('foo').dropkick();
  methods.init = function (settings) {
		
    settings = $.extend({}, defaults, settings);

    return this.each(function () {
      var
        // The current <select> element
        $select = $(this);
				if(!$select.attr('tabindex')) {
					$select.attr('tabindex','1');
				};
				
				// change
				if(settings.change == $.noop) {
					if($select[0].onchange) {
						settings.change = $select[0].onchange;
					}
				}
				
				var
        // Store a reference to the originally selected <option> element
        $original = $select.find(':selected').first(),

        // Save all of the <option> elements
        $options = $select.find('option'),

        // We store lots of great stuff using jQuery data
        data = $select.data('dropkick') || {},

        // This gets applied to the 'dk_container' element
        id = $select.attr('id') || $select.attr('name'),

        // This gets updated to be equal to the longest <option> element
        width  = (settings.width || $select.outerWidth()) - 43,
        //width  = (settings.width || $select.outerWidth()) - 52,

        // Check if we have a tabindex set or not
        tabindex  = $select.attr('tabindex') ? $select.attr('tabindex') : '',

        // The completed dk_container element
        $dk = false,

        theme,
				
				style = {
					left:$select.css('left'),
					top: $select.css('top'),
					//width: ($select.width()+3)+'px',
					position: $select.css('position') == 'static'? 'relative': $select.css('position'),
					'float': $select.css('float'),
					display: 'inline-block'
				}
      ;
			

      // Dont do anything if we've already setup dropkick on this element
      if (data.id) {
				data.$dk.remove();
			}
        //return $select;
      //} else {
        data.settings  = settings;
        data.tabindex  = tabindex;
        data.id        = id;
        data.$original = $original;
        data.$select   = $select;
        data.value     = _notBlank($select.val()) || _notBlank($original.attr('value'));
        data.label     = $original.text();
        data.options   = $options;
				data.style 		 = style;
      //}

			$select.css('display','none');
      // Build the dropdown HTML
      $dk = _build(dropdownTemplate, data);

      // Make the dropdown fixed width if desired
			
			
        width  = (  (settings.width? settings.width : false) || $select.outerWidth() ) - 43;
				
				if($select.hasClass('jwxe_select') || settings.jwxe) {
					width -= 10;
				}
				
	      $dk.find('.dk_toggle').css({
	        'width' : width + 'px'
	      });
				

      // Hide the <select> list and place our new one in front of it
      $select.before($dk);

      // Update the reference to $dk
      //$dk = $(document.getElementById('#dk_container_' + id)).fadeIn(settings.startSpeed);

      // Save the current theme
      theme = settings.theme ? settings.theme : 'default';
      $dk.addClass('dk_theme_' + theme);
			$dk.css(style);
      data.theme = theme;

      // Save the updated $dk reference into our data object
      data.$dk = $dk;

      // Save the dropkick data onto the <select> element
      $select.data('dropkick', data);

      // Do the same for the dropdown, but add a few helpers
      $dk.data('dropkick', data);

      lists[lists.length] = $select;

      // Focus events
			$dk.data('blur',true);
			$dk.find('.dk_options_inner').mousedown(function(e) {
				$dk.data('blur',false);
	      e.preventDefault();
				
			}).mouseup(function(e) {
				$dk.find('.dk_toggle').focus();
				$dk.data('blur',true);
  	    e.preventDefault();
			});
			
      $dk.find('.dk_toggle').bind('focus', function (e) {
				
				$dk.data('blur',true);
        $dk.addClass('dk_focus');
	      e.preventDefault();
				
      }).bind('blur', function (e) {
				if(!$dk.data('blur')) {
					$dk.data('blur',true);
		      e.preventDefault();
					return;
				}				 
        $dk.removeClass('dk_open dk_focus');
	      e.preventDefault();
				
      });
	  
			/*
      $dk.bind('focus', function (e) {
		  //console.log(this);
        //$dk.addClass('dk_focus');
      }).bind('blur', function (e) {
				console.log('a blur');
        $dk.removeClass('dk_open dk_focus');
      }); */
	  
			
			if($dk.css('font-family') && $dk.css('font-family').test(/malgun|nanum/i)) {
				$dk.find('.dk_label').css('top','0');			
			}
			

      setTimeout(function () {
        $select.hide();
      }, 0);
    });
  };

  // Allows dynamic theme chnages
  methods.theme = function (newTheme) {
    var
      $select   = $(this),
      list      = $select.data('dropkick'),
      $dk       = list.$dk,
      oldtheme  = 'dk_theme_' + list.theme
    ;

    $dk.removeClass(oldtheme).addClass('dk_theme_' + newTheme);

    list.theme = newTheme;
  };

  // Reset all <selects and dropdowns in our lists array
  methods.reset = function () {
    for (var i = 0, l = lists.length; i < l; i++) {
      var
        listData  = lists[i].data('dropkick'),
        $dk       = listData.$dk,
        $current  = $dk.find('li').first()
      ;

      $dk.find('.dk_label').text(listData.label);
      $dk.find('.dk_options_inner').animate({ scrollTop: 0 }, 0);

      _setCurrent($current, $dk);
      _updateFields($current, $dk, true);
    }
  };
	
	methods.destroy = function() {
		var $select = $(this);
    var data = $select.data('dropkick');
		if(data) {
			$select.css('display','');
			data.$dk.remove();
		}
	};

	methods.change = function( changeFnc ) {
		var $select = $(this);
    var data = $select.data('dropkick');
		if(data) {
			data.settings.change = changeFnc
		}
	};

	methods.select = function( selectedValue ) {
		var $select = $(this);
    var data = $select.data('dropkick');
		if(data) {
      var $dk = data.$dk, $current;
			
      $dk.find('.dk_options li a').each(function() {
				var $this = $(this);
				if($this.attr('data-dk-dropdown-value') == selectedValue) {
					$current = $this;
					return false;
				}
			});
			
			if($current) {

	      _setCurrent($current.parent(), $dk);
	      _updateFields($current, $dk);
				
			}
			
		}
	};


  // Expose the plugin
  $.fn.dropkick = function (method) {
		
		if(typeof(andwise) == 'undefined' || typeof(andwise.is_mobile) == 'undefined') {  
		
	    if (!ie6 && !$.browser.ismobile) {
	      if (methods[method]) {
	        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
	      } else if (typeof method === 'object' || ! method) {
	        return methods.init.apply(this, arguments);
	      }
	    }
			
		}
  };

  // private
  function _handleKeyBoardNav(e, $dk) {
    var
      code     = e.keyCode,
      data     = $dk.data('dropkick'),
      options  = $dk.find('.dk_options'),
      open     = $dk.hasClass('dk_open'),
      current  = $dk.find('.dk_option_current'),
      first    = options.find('li').first(),
      last     = options.find('li').last(),
      next,
      prev
    ;

    switch (code) {
      case keyMap.enter:
        if (open) {
          _updateFields(current.find('a'), $dk);
          _closeDropdown($dk);
        } else {
          _openDropdown($dk);
        }
        e.preventDefault();
      break;

      case keyMap.up:
        prev = current.prev('li');
        if (open) {
          if (prev.length) {
            _setCurrent(prev, $dk);
          } else {
            _setCurrent(last, $dk);
          }
        } else {
          _openDropdown($dk);
        }
        e.preventDefault();
      break;

      case keyMap.down:
        if (open) {
          next = current.next('li').first();
          if (next.length) {
            _setCurrent(next, $dk);
          } else {
            _setCurrent(first, $dk);
          }
        } else {
          _openDropdown($dk);
        }
        e.preventDefault();
      break;

      default:
      break;
    }
  }

  // Update the <select> value, and the dropdown label
  function _updateFields(option, $dk, reset) {
    var value, label, data;

    value = option.attr('data-dk-dropdown-value');
    label = option.text();
    data  = $dk.data('dropkick');

    $select = data.$select;
    $select.val(value);

    $dk.find('.dk_label').text(label);

    reset = reset || false;

    if (!reset) {
      data.settings.change.call($select, $select, value, label);
    }
  }

  // Set the currently selected option
  function _setCurrent($current, $dk) {
    $dk.find('.dk_option_current').removeClass('dk_option_current');
    $current.addClass('dk_option_current');

    _setScrollPos($dk, $current);
  }

  function _setScrollPos($dk, anchor) {
    var height = anchor.prevAll('li').outerHeight() * anchor.prevAll('li').length;
    $dk.find('.dk_options_inner').animate({ scrollTop: height + 'px' }, 0);
  }

  // Close a dropdown
  function _closeDropdown($dk) {
		$dk.data('blur',true);
    $dk.removeClass('dk_open');
  }

  // Open a dropdown
  function _openDropdown($dk) {
    var data = $dk.data('dropkick');
    $dk.find('.dk_options').css({ top : $dk.find('.dk_toggle').outerHeight() - 1 });
    $dk.toggleClass('dk_open');
		$dk.data('blur',true);

  }

  /**
   * Turn the dropdownTemplate into a jQuery object and fill in the variables.
   */
  function _build(tpl, view) {
    var
      // Template for the dropdown
      template  = tpl,
      // Holder of the dropdowns options
      options   = [],
      $dk,
			style
    ;

    template = template.replace('{{ id }}', view.id);
    template = template.replace('{{ label }}', view.label);
    template = template.replace('{{ tabindex }}', view.tabindex);
		
    if (view.options && view.options.length) {
      for (var i = 0, l = view.options.length; i < l; i++) {
        var
          $option   = $(view.options[i]),
          current   = 'dk_option_current',
          oTemplate = optionTemplate
        ;

        oTemplate = oTemplate.replace('{{ value }}', $option.val());
        oTemplate = oTemplate.replace('{{ current }}', (_notBlank($option.val()) === view.value) ? current : '');
        oTemplate = oTemplate.replace('{{ text }}', $option.text());

        options[options.length] = oTemplate;
      }
    }

    $dk = $(template);
    $dk.find('.dk_options_inner').html(options.join(''));
		
    view.settings.onRender.call($dk);

    return $dk;
  }

  function _notBlank(text) {
    return ($.trim(text).length > 0) ? text : false;
  }

  $(function () {

    // Handle click events on the dropdown toggler
    $('.dk_toggle').on('click', function (e) {
			
			this.focus();
			
      var $dk  = $(this).parents('.dk_container').first();

      _openDropdown($dk);

      if ("ontouchstart" in window) {
        $dk.addClass('dk_touch');
        $dk.find('.dk_options_inner').addClass('scrollable vertical');
      }

      e.preventDefault();
      return false;
    });

    // Handle click events on individual dropdown options
    $('.dk_options a').on('mousedown', function (e) {
			
      var
        $option = $(this),
        $dk     = $option.parents('.dk_container').first(),
        data    = $dk.data('dropkick')
      ;
    
      _closeDropdown($dk);
      _setCurrent($option.parent(), $dk);
      _updateFields($option, $dk);
    
      e.preventDefault();
      return false;
    });

    // Setup keyboard nav
    $(document).bind('keydown.dk_nav', function (e) {
      var
        // Look for an open dropdown...
        $open    = $('.dk_container.dk_open'),

        // Look for a focused dropdown
        $focused = $('.dk_container.dk_focus'),

        // Will be either $open, $focused, or null
        $dk = null
      ;

      // If we have an open dropdown, key events should get sent to that one
      if ($open.length) {
        $dk = $open;
      } else if ($focused.length && !$open.length) {
        // But if we have no open dropdowns, use the focused dropdown instead
        $dk = $focused;
      }

      if ($dk) {
        _handleKeyBoardNav(e, $dk);
      }
    });
  });
})(jQuery, window, document);