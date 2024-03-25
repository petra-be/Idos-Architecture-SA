<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.20/fullpage.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"/>
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/style.css">

    <link rel="icon" href="<?php bloginfo('stylesheet_directory'); ?>/img/android-chrome-192x192.png" sizes="48x48" >
    <link rel="apple-touch-icon" href="<?php bloginfo('stylesheet_directory'); ?>/img/apple-touch-icon.png"/>
    <link rel="manifest" href="/site.webmanifest"/>

    <!-- Start cookieyes banner --> 
    <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/5f74aafac4d68eea4a9d82d4/script.js"></script> 
    <!-- End cookieyes banner -->
    <title><?php bloginfo('name'); ?></title>
    
</head>
<body>

<style>
.swiper-button-next{cursor: url('<?php bloginfo('stylesheet_directory'); ?>/img/right.png')40 34, auto;}
.swiper-button-prev{cursor: url('<?php bloginfo('stylesheet_directory'); ?>/img/left.png')40 34, auto;}
.updownArrow.up {cursor: url('<?php bloginfo('stylesheet_directory'); ?>/img/top.png')34 40,auto;}
.updownArrow.down {cursor: url('<?php bloginfo('stylesheet_directory'); ?>/img/bottom.png')34 40,auto;}
</style>

          


      <header>
        <div class="header-row">
            <button class="menu-toggle" id="menuToggle">
                <svg viewBox="0 0 40 10" class="hamburger" height="40px" width="40px">
                  <rect class="bar-1" y="12" width="40" height="2" transform="matrix(1,0,0,1,0,0)" fill="var('--black')"/>
                  <rect class="bar-2" y="6" width="40" height="2"/>
                  <rect class="bar-3"width="40" height="2" fill="var('--black')"/>

                </svg>
             
                  
            </button>
        </div>
        <i class="mode-tog" id="toggleD"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">
            <defs>
              <clipPath id="clip-path">
                <path id="Tracé_16" data-name="Tracé 16" d="M0-3.46H20v-20H0Z" transform="translate(0 23.46)" fill="none"/>
              </clipPath>
            </defs>
            <g id="Groupe_48" data-name="Groupe 48" transform="translate(0 38.46)">
              <g id="Groupe_19" data-name="Groupe 19" transform="translate(0 -38.46)" clip-path="url(#clip-path)">
                <g id="Groupe_18" data-name="Groupe 18">
                  <path id="Tracé_15" data-name="Tracé 15" d="M-1.73-3.46a10.031,10.031,0,0,1-10-10,10.015,10.015,0,0,1,10-10,10,10,0,0,1,10,10,10.015,10.015,0,0,1-10,10m0-18.951a8.978,8.978,0,0,0-8.951,8.951A8.994,8.994,0,0,0-1.73-4.509Z" transform="translate(11.73 23.46)" fill="var(--black)"/>
                </g>
              </g>
            </g>
          </svg>
          </i>
    </header>
    <section class="fullpage-menu">
        <div class="fullpage-menu-inner">
            <div class="menu-bg">
                <span></span>
                <span></span>
            </div>

            <nav>
                <ul class="main-menu">
                    <li>
                        <ul class="societe-links">
                            <li><p>Société</p></li>
                            <li><h3>IDOS architecture SA</h3></li>
                        </ul>
                    </li>
                    <li><ul class="projets-links"><div class="el"><a href="<?php echo site_url() ?>" class="nav_opt btn btn-clone"><div class="btn-hold btn-hold-projet"><span class="main"><h1>projets</h1></span><span class="clone"><h1>projets</h1></span></div></a></div></ul></li>
                    <li>
                        <ul class="bureau-links">
                           
                            <li><div class="el"><a class="nav_opt btn btn-clone btn-bureau"><div class="btn-hold btn-hold-projet"><span class="main"><h1>bureau</h1></span><span class="clone"><h1>bureau</h1></span></div></a></div></li>
                            <li class="bureau-links-details-global">
                                <ul class="bureau-links-details">
                                    <li><div class="el"><a href="<?php echo site_url('/equipe') ?>" class="nav_opt btn btn-clone"><div class="btn-hold btn-hold-bureau"><span class="main"><h3>équipe</h3></span><span class="clone"><h3>équipe</h3></span></div></a></div></li>
                                    <li><div class="el"><a href="<?php echo site_url('/emploi') ?>" class="nav_opt btn btn-clone"><div class="btn-hold btn-hold-bureau"><span class="main"><h3>emploi & stage</h3></span><span class="clone"><h3>emploi & stage</h3></span></div></a></div></li>
                                    <li><div class="el"><a href="<?php echo site_url('/philosophie') ?>" class="nav_opt btn btn-clone"><div class="btn-hold btn-hold-bureau"><span class="main"><h3>philosophie</h3></span><span class="clone"><h3>philosophie</h3></span></div></a></div></li>
                                </ul>
                            </li>
                            
                        </ul>
                    </li>
                    <li>
                        <ul class="social-links">
                            <li>
                                <p>atelier</p>



                                <?php  
                                $adresse_rue_menu = get_field('adresse_rue_menu','option'); 
                                $lien_google_map = get_field('lien_google_map','option'); 
                                $adresse_ville_menu = get_field('adresse_ville_menu','option'); 
                                $mail_menu = get_field('mail_menu','option'); 
                                $numero_menu = get_field('numero_menu','option'); 
                                $instagram_societe_menu = get_field('instagram_societe_menu','option'); 
                                $linkedin_societe_menu = get_field('linkedin_societe_menu','option'); 
                                ?>

                                <div class="el"><a target="_blank" href="<?php echo $lien_google_map; ?>" class="nav_opt btn btn-clone"><div class="btn-hold btn-hold-atelier"><span class="main"><h3><?php echo $adresse_rue_menu; ?> 
<?php echo $adresse_ville_menu; ?></h3></span><span class="clone"><h3><?php echo $adresse_rue_menu; ?> 
<?php echo $adresse_ville_menu; ?></h3></span></div></a></div>
                                
                            </li>
                            <li>
                                <p>Contact</p>
                                <div class="el"><a target="_blank" href="mailto:<?php echo $mail_menu; ?>" class="nav_opt btn btn-clone"><div class="btn-hold btn-hold-bureau"><span class="main"><h3><?php echo $mail_menu; ?></h3></span><span class="clone"><h3><?php echo $mail_menu; ?></h3></span></div></a></div>
                                <div class="el"><a target="_blank" href="tel:<?php echo $numero_menu; ?>" class="nav_opt btn btn-clone"><div class="btn-hold btn-hold-bureau"><span class="main"><h3><?php echo $numero_menu; ?></h3></span><span class="clone"><h3><?php echo $numero_menu; ?></h3></span></div></a></div>

                            </li>
                            <li>
                                <p>Réseaux sociaux</p>
                                <div class="el"><a target="_blank" href="<?php echo $instagram_societe_menu; ?>" class="nav_opt btn btn-clone"><div class="btn-hold btn-hold-bureau"><span class="main"><h3>Instagram</h3></span><span class="clone"><h3>Instagram</h3></span></div></a></div>
                                <div class="el"><a target="_blank" href="<?php echo $linkedin_societe_menu; ?>" class="nav_opt btn btn-clone"><div class="btn-hold btn-hold-bureau"><span class="main"><h3>LinkedIn</h3></span><span class="clone"><h3>LinkedIn</h3></span></div></a></div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>


        </div>
    </section>