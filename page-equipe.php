<?php get_header(); ?>


<div class="equipe" id="fullpage">


<div class="section">
<div class="typed-strings">
    <p>équipe soudée…</p>
    <p>Quoique… :)</p>
</div>
<span class="typed" id="typed_style"></span>
<div class="accordion-div">
                    <?php 
                    if( have_rows('team_repeater') ):$i = 0; 
                    while( have_rows('team_repeater') ): $i++; the_row();
                        $worker_name = get_sub_field('worker_name');
                        $worker_role = get_sub_field('worker_role');
                        $worker_linkedin = get_sub_field('worker_linkedin');
                    ?>




    <div class="accordion-label" data-cursor-hover<?php echo $i; ?>="hover<?php echo $i; ?>">
        <button class="accordion">
            <h2><?php echo $worker_name; ?></h2>
        </button>
        
       
            
            <div class="panel">
                <p><?php echo $worker_role; ?></p>

                <?php if( get_sub_field('worker_linkedin') ): ?>
                    <div class="el">
                        <a target="_blank" href="<?php echo $worker_linkedin; ?>" class="nav_opt btn btn-clone">
                            <div class="btn-hold btn-hold-linkedin">
                                <span class="main main_svg">



<svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.52 32.52">
  <path d="m16.26,0C7.28,0,0,7.28,0,16.26s7.28,16.26,16.26,16.26,16.26-7.28,16.26-16.26S25.24,0,16.26,0Zm-4.4,24.57h-4v-14.25h4v14.25Zm-1.96-15.28c-1.26.04-2.19-1.06-2.07-2.05-.12-1.06.89-2.07,2.02-2.03,1.21.04,2.05.85,2.05,2.09,0,1.11-.88,1.96-2,2Zm16.12,15.24c-1.35.01-2.7.03-4.05.04-.05-2.71-.09-5.43-.14-8.14.1-1.11-.74-2.09-1.8-2.16-1.1-.08-2.09.83-2.09,1.98,0,2.75,0,5.49,0,8.24-1.35.01-2.7.02-4.05.03-.02-4.73-.04-9.46-.06-14.19,1.34.01,2.69.02,4.03.04,0,.53,0,1.07,0,1.6.24-.34.86-1.14,1.99-1.54,0,0,1.47-.53,3.07.12,1.92.78,3.17,3.15,3.13,5.93,0,2.68-.02,5.37-.02,8.05Z" fill="var(--black)"/>
</svg>
                                    
                                </span>
                                <span class="clone clone_svg">
                                <svg id="Calque_2" data-name="Calque 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.52 32.52">
  <path d="m16.26,0C7.28,0,0,7.28,0,16.26s7.28,16.26,16.26,16.26,16.26-7.28,16.26-16.26S25.24,0,16.26,0Zm-4.4,24.57h-4v-14.25h4v14.25Zm-1.96-15.28c-1.26.04-2.19-1.06-2.07-2.05-.12-1.06.89-2.07,2.02-2.03,1.21.04,2.05.85,2.05,2.09,0,1.11-.88,1.96-2,2Zm16.12,15.24c-1.35.01-2.7.03-4.05.04-.05-2.71-.09-5.43-.14-8.14.1-1.11-.74-2.09-1.8-2.16-1.1-.08-2.09.83-2.09,1.98,0,2.75,0,5.49,0,8.24-1.35.01-2.7.02-4.05.03-.02-4.73-.04-9.46-.06-14.19,1.34.01,2.69.02,4.03.04,0,.53,0,1.07,0,1.6.24-.34.86-1.14,1.99-1.54,0,0,1.47-.53,3.07.12,1.92.78,3.17,3.15,3.13,5.93,0,2.68-.02,5.37-.02,8.05Z" fill="var(--black)"/>
</svg>
                                </span>
                            </div>
                        </a>
                    </div><?php endif; ?>
            </div>
 
        </div>
        <?php endwhile; endif; ?>





    
</div>



</div>
</div>

<div id="custom-cursor" class="custom-cursor-equipe">
    <svg id="custom-cursor-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"></svg>

                    <?php 
                    if( have_rows('workers_images') ):$i = 0; 
                    while( have_rows('workers_images') ): $i++; the_row();
                        $custom_image = get_sub_field('custom_image');
                    ?>
    <img id="custom-cursor-hover<?php echo $i; ?>" src="<?php echo $custom_image['url']; ?>" alt="">
    <?php endwhile; endif; ?>
</div> 



<?php get_footer(); ?>