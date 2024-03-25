<?php get_header(); ?>
<div id="fullpage">
<div class="section">

<div class="accordion-div philo">
<?php 
                    if( have_rows('philosophie_repeater') ): 
                    while( have_rows('philosophie_repeater') ): the_row();
                        $titre_philosophie = get_sub_field('titre_philosophie');
                        $description_philosophie = get_sub_field('description_philosophie');
                    ?>

  <div class="accordion-label"><button class="accordion"><h2><?php echo $titre_philosophie; ?></h2></button>
    <div class="panel">
      <h3><?php echo $description_philosophie; ?></h3>
    </div>
</div>
<?php endwhile; endif; ?>
  </div>
  </div>


<?php get_footer(); ?>