<?php get_header(); ?>
<div id="fullpage">


<div class="section">
<div class="section">
<div class="typed-strings">
    <p>Postulation: sélection naturelle</p>
</div>
<span class="typed" id="typed_style"></span>
<div class="game">
<div class="board">
  <div class="overlay">
    <h2>à vous de jouer</h2>
  </div>
  
  <!-- cells here! -->
</div>


<div class="winner" data-cursor-arrow="left">
<?php  
$poste = get_field('poste'); 
$mail_poste = get_field('mail_poste'); 
$informations_poste = get_field('informations_poste'); 
?>
        <div class='description_1'>
            <div class='description_1_1'>
                <p>Gagnant</p><h3 id="player"></h3>
            </div><span></span>
            <div class='description_1_1'>
                <p>Stage & emploi</p><h3>Poste à pourvoir :</h3>
            </div>
        </div>
        <div class="accordion-label description_2 winner2" data-cursor-hover3="hover1"><button class="accordion">
            <h2><?php echo $poste; ?></h2></button>
            <div class="panel"><p>Merci d'envoyer un pdf de votre cv au mail : </p>
                <div class="el"><a target="_blank" href="mailto:<?php echo $mail_poste; ?>" class="nav_opt btn btn-clone"><div class="btn-hold btn-hold-bureau"><span class="main"><h3><?php echo $mail_poste; ?></h3></span><span class="clone"><h3><?php echo $mail_poste; ?></h3></span></div></a></div>
            </div>
        </div>
        <div class="accordion-label description_2 loser" data-cursor-hover3="hover1"><button class="accordion">
            <h2 id="loser"></h2></button>
            <div class="panel"><p>Pour recommencer, appuyez sur la flèche en bas à droite...</p></div>
        </div>
        <div class='description_3'>
            <div class='description_3_1'>
                <p>informations</p><h3><?php echo $informations_poste; ?></h3>
            </div>
        </div>

</div>
</div>


<div class="controls">
  <button class="reset">↻</button>
</div>




<!-- custom cursor -->










</div>
</div>
<div id="custom-cursor">
<svg id="custom-cursor-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  
</svg>
<img id="custom-cursor-arrow" src="<?php bloginfo('stylesheet_directory'); ?>/img/handcross.png" alt="">
</div>
<?php get_footer(); ?>