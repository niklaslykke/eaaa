<?php
// add post thumbnail to theme
  add_theme_support( 'post-thumbnails' );

  // add custom fields to the WP API
  register_meta( 'post', 'sub_title', array('show_in_rest'=> true));
  register_meta( 'post', 'link_url', array('show_in_rest'=> true));
  register_meta( 'post', 'link_text', array('show_in_rest'=> true));
 ?>
