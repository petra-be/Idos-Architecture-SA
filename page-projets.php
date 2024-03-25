<?php get_header(); ?>


<div class="loading">
        <div class="half-x left"><h2 class="load-logo">IDOS</h2></div>
        <div class="half-x right">
            <h2 class="load-logo">IDOS</h2>
            <h3 id="load-subtitle">atelier d’architecture</h3>
            <div class="typed-strings">
    <p>Chargement...</p>
</div>
<span class="typed typed-loading" id="typed_style"></span>
        </div>
        
      </div>



    <div class="container">
      <div id="fullpage">



      <?php 
                    if( have_rows('project_repeater') ): 
                    while( have_rows('project_repeater') ): the_row();
                        $titre_du_projet = get_sub_field('titre_du_projet');
                        $programme = get_sub_field('programme');
                        $mandat = get_sub_field('mandat');
                        $annee = get_sub_field('annee');
                        $maitre_douvrage = get_sub_field('maitre_douvrage');
                        $informations_supplementaires = get_sub_field('informations_supplementaires');
                        $typed_text_project = get_sub_field('typed_text_project');
                        $online_offline = get_sub_field('online_offline');
                    ?>

<?php if($online_offline): ?>
        <div class="section">
            <div>
            <div class="typed-strings">
                <p><?php echo $typed_text_project; ?></p>
            </div>
            <span class="typed" id="typed_style"></span>
                

            <div class="wrapper">
                <div class="swiper mySwiper swiper-container">
                    <div class="swiper-wrapper" >
                    <?php 
                    if( have_rows('galerie_images') ): 
                    while( have_rows('galerie_images') ): the_row();
                        $img_desktop_projet = get_sub_field('img_desktop_projet');
                        $img_mobile_projet = get_sub_field('img_mobile_projet');
                    ?>
                    
                        <div class="swiper-slide">
                            <img class="img-desktop" src="<?php echo $img_desktop_projet['url']; ?>" alt="">
                            <img class="img-mobile" src="<?php echo $img_mobile_projet['url']; ?>" alt="">
                        </div>

                        <?php endwhile; endif; ?>
                        <div class="swiper-slide">
                            <div class="project_description">
                                <div class="description_1">
                                    <div class="description_1_1"><p>Programme</p><h3><?php echo $programme; ?></h3></div><span></span>
                                    <div class="description_1_1"><p>Mandat</p><h3><?php echo $mandat; ?></h3></div><span></span>
                                    <div class="description_1_1"><p>Année</p><h3><?php echo $annee; ?></h3></div><span></span>
                                    <div class="description_1_1"><p>Lieu</p><h3><?php echo $maitre_douvrage; ?></h3></div>
                                </div>
                                <div class="description_2">
                                    <h2><?php echo $titre_du_projet; ?></h2>
                                </div>
                                <div class="description_3">
                                    <div class="description_3_1">
                                        <p>informations</p>
                                        <h3><?php echo $informations_supplementaires; ?></h3>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>

                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div></div>
        </div>

        <?php endif; ?>
  <?php endwhile; endif; ?>




      

</div>

  <div class="updownArrow up"></div>
  <div class="updownArrow down"></div>


  <?php get_footer(); ?>