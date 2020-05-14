function loadHeader() {
    let xhtml=`
    <header class="section-header">
    ${loadHeaderTopNav()}
    <section class="header-main border-bottom">
        <div class="container">        
            <div class="row align-items-center">
            ${loadHeaderLeft()}
            ${loadHeaderMid()}
            ${loadHeaderRight()}
            </div>
        </div>
    </section>
    ${loadHeaderNav()}
    </header> 
    `;
    return xhtml;
}
function loadHeaderLeft() {
    let xhtml=`
    <div class="col-xl-2 col-lg-3 col-md-12">
    <a href="index.html" class="brand-wrap">
        <img class="logo" src="images/logo.png">
    </a> <!-- brand-wrap.// -->
    </div>
    `;
    return xhtml;
}
function loadHeaderMid() {
    let xhtml=`
    <div class="col-xl-6 col-lg-5 col-md-6">
    <form action="#" class="search-header">
        <div class="input-group w-100">
            <select class="custom-select border-right"  name="category_name">
                    <option value="">All type</option><option value="codex">Special</option>
                    <option value="comments">Only best</option>
                    <option value="content">Latest</option>
            </select>
            <input type="text" class="form-control" placeholder="Search">
            
            <div class="input-group-append">
              <button class="btn btn-primary" type="submit">
                <i class="fa fa-search"></i> Search
              </button>
            </div>
        </div>
    </form> 
</div>
    `;
    return xhtml;
}
function loadHeaderRight() {
    let xhtml=`
    <div id="singin" class="col-lg-4 col-sm-6 col-12">
    <div class="widgets-wrap float-md-right"> 
        <div class="widget-header  mr-3">
            <a href="#" class="icon icon-sm rounded-circle border" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-shopping-cart"></i></a>
            <span class="badge badge-pill badge-danger notify">0</span>
            <div class="dropdown-menu p-3 dropdown-menu-right" style="min-width: 280px; position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(200px, 38px, 0px);" x-placement="bottom-end">
                <figure class="itemside mb-3">
                 <div class="aside"><img src="images/items/1.jpg" class="img-sm border"></div>
                 <figcaption class="info align-self-center">
                     <p class="title">Name of item nice iteme</p>
                     <a href="#" class="float-right"><i class="fa fa-trash"></i></a>
                     <div class="price">$250</div> <!-- price-wrap.// -->
                 </figcaption>
             </figure>
             <figure class="itemside mb-3">
                 <div class="aside"><img src="images/items/2.jpg" class="img-sm border"></div>
                 <figcaption class="info align-self-center">
                     <p class="title">Some other item name is here</p>
                     <a href="#" class="float-right"><i class="fa fa-trash"></i></a>
                     <div class="price">$250</div> <!-- price-wrap.// -->
                 </figcaption>
             </figure>
             <figure class="itemside mb-3">
                 <div class="aside"><img src="images/items/3.jpg" class="img-sm border"></div>
                 <figcaption class="info align-self-center">
                     <p class="title">Another name of item  item</p>
                     <a href="#" class="float-right"><i class="fa fa-trash"></i></a>
                     <div class="price">$250</div> <!-- price-wrap.// -->
                 </figcaption>
             </figure>
             <div class="price-wrap text-center py-3 border-top">Subtotal: <strong class="h5 price">$1200</strong></div>
             <a href="page-shopping-cart.html" class="btn btn-primary btn-block"> Checkout </a>
            </div> <!-- drowpdown-menu.// -->
        </div>
        <div class="widget-header dropdown">
            <a href="#" data-toggle="dropdown" data-offset="20,10" aria-expanded="false">
                <div class="icontext">
                    <div class="icon">
                        <i class="icon-sm rounded-circle border fa fa-user"></i>
                    </div>
                    <div class="text">
                        <small class="text-muted">Sign in | Join</small>
                        <div>My account <i class="fa fa-caret-down"></i> </div>
                    </div>
                </div>
            </a>
            <div class="dropdown-menu dropdown-menu-right" x-placement="top-end" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(-108px, -323px, 0px);">
                <form class="px-4 py-3">
                    <div class="form-group">
                      <label>Email address</label>
                      <input type="email" class="form-control" placeholder="email@example.com">
                    </div>
                    <div class="form-group">
                      <label>Password</label>
                      <input type="password" class="form-control" placeholder="Password">
                    </div>
                    <button onclick="signin()" type="submit" class="btn btn-primary">Sign in</button>
                    </form>
                    <hr class="dropdown-divider">
                    <a class="dropdown-item" href="#">Have account? Sign up</a>
                    <a class="dropdown-item" href="#">Forgot password?</a>
            </div> <!--  dropdown-menu .// -->
        </div>
        <!-- <div class="widget-header icontext">
            <a href="#" class="icon icon-sm rounded-circle border" data-toggle="dropdown" data-offset="20,10" aria-expanded="false"><i class="fa fa-user"></i></a>						
            <div class="text">
                <span class="text-muted">Welcome!</span>
                <div> 
                    <a href="#" >Sign in</a> | <a href="page-user-register.html">Register</a>								
                </div>
            </div>
            <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(-108px, 42px, 0px);">
                <form class="px-4 py-3">
                    <div class="form-group">
                      <label>Email address</label>
                      <input type="email" class="form-control" placeholder="email@example.com">
                    </div>
                    <div class="form-group">
                      <label>Password</label>
                      <input type="password" class="form-control" placeholder="Password">
                    </div>
                    <button type="submit" class="btn btn-primary">Sign in</button>
                    </form>
                    <hr class="dropdown-divider">
                    <a class="dropdown-item" href="#">Have account? Sign up</a>
                    <a class="dropdown-item" href="#">Forgot password?</a>
            </div> 
            
        </div> -->
    </div> <!-- widgets-wrap.// -->
</div> <!-- col.// -->
    `;
    return xhtml;
}
function loadHeaderRightSignOut() {
    let xhtml=`

    <div class="d-flex justify-content-end">
			<a href="#" class="widget-header mr-3">
				<div class="icon">
					<i class="icon-sm rounded-circle border fa fa-shopping-cart"></i>
					<span class="notify">0</span>
				</div>
			</a>
			<a href="#" class="widget-header mr-3">
				<div class="icon">
					<i class="icon-sm rounded-circle border fa fa-heart"></i>
				</div>
			</a>

			<div class="widget-header dropdown">
				<a href="#" data-toggle="dropdown" class="dropdown-toggle" data-offset="20,10">
					<div class="icon icon-sm rounded-circle border ">
						<i class="fa fa-user"></i>
					</div>
					<span class="sr-only">Profile actions</span>
				</a>
				<div class="dropdown-menu dropdown-menu-right">
					<a class="dropdown-item" href="#">Profile setting</a>
					<a class="dropdown-item" href="#">My orders</a>
					<hr class="dropdown-divider">
					<a class="dropdown-item" href="/">Log out</a>
				</div> <!--  dropdown-menu .// -->
			</div>  <!-- widget-header .// -->
		</div>

    `;
    return xhtml;
}
function loadHeaderTopNav() {
    let xhtml=`
    <nav class="navbar navbar-dark navbar-expand p-0 bg-primary">
    <div class="container">
        <ul class="navbar-nav d-none d-md-flex mr-auto">
            <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Delivery</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Payment</a></li>
        </ul>
        <ul class="navbar-nav">
            <li class="nav-item"><a href="#" class="nav-link"> Call: +99812345678 </a></li>
            <li class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"> English </a>
                <ul class="dropdown-menu dropdown-menu-right" style="max-width: 100px;">
                    <li><a class="dropdown-item" href="#">Arabic</a></li>
                    <li><a class="dropdown-item" href="#">Russian </a></li>
                </ul>
            </li>
        </ul>
        <!-- list-inline //  -->
    </div>
    <!-- navbar-collapse .// -->
    <!-- container //  -->
</nav>

    `;
    return xhtml;
}
function loadHeaderNav() {
    let xhtml=`
    <nav class="navbar navbar-main navbar-expand-lg border-bottom">
    <div class="container">  
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>  
      <div class="collapse navbar-collapse" id="main_nav">
        ${loadHeaderNavOne()}
        ${loadHeaderNavTwo()}
      </div> <!-- collapse .// -->
    </div> <!-- container .// -->
</nav>
    `;
    return xhtml;
}
function loadHeaderNavOne() {
    let xhtml=`
        <ul class="navbar-nav">
            <li class="nav-item dropdown">
            <a class="nav-link pl-0" data-toggle="dropdown" href="#"><strong> <i class="fa fa-bars"></i> &nbsp;  All category</strong></a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Foods and Drink</a>
              <a class="dropdown-item" href="#">Home interior</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Category 1</a>
              <a class="dropdown-item" href="#">Category 2</a>
              <a class="dropdown-item" href="#">Category 3</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Fashion</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Supermarket</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Electronics</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Baby &amp; Toys</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Fitness sport</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Clothing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Furnitures</a>
          </li>
        </ul>
    `;
    return xhtml;
}
function loadHeaderNavTwo() {
    let xhtml=`
    <ul class="navbar-nav ml-md-auto">
    <li class="nav-item">
    <a class="nav-link" href="#">Get the app</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="http://example.com" data-toggle="dropdown">English</a>
    <div class="dropdown-menu dropdown-menu-right">
      <a class="dropdown-item" href="#">Russian</a>
      <a class="dropdown-item" href="#">French</a>
      <a class="dropdown-item" href="#">Spanish</a>
      <a class="dropdown-item" href="#">Chinese</a>
    </div>
  </li>
</ul>
    `;
    return xhtml;
}
function signin() {
    
    document.getElementById("singin").innerHTML = loadHeaderRightSignOut();
}
function loadMainIndex() {
    let xhtml=`
    <div class="container">
        ${loadMainHeader()}
        ${loadMainProductDeal()}
        ${loadMainProductCategory()}
        ${loadMainProductRequest()}
        ${loadMainProductPopular()}
        ${loadMainServices()}
        ${loadMainRegion()}
        ${loadMainBanner()}    
    </div>      
    `;
    return xhtml;
}
function loadBeforeFooter() {
    let xhtml=`
    <section class="section-subscribe padding-y-lg">
    <div class="container">    
    <p class="pb-2 text-center text-white">Delivering the latest product trends and industry news straight to your inbox</p>    
    <div class="row justify-content-md-center">
        <div class="col-lg-5 col-md-6">
    <form class="form-row">
            <div class="col-md-8 col-7">
            <input class="form-control border-0" placeholder="Your Email" type="email">
            </div> <!-- col.// -->
            <div class="col-md-4 col-5">
            <button type="submit" class="btn btn-block btn-warning"> <i class="fa fa-envelope"></i> Subscribe </button>
            </div> <!-- col.// -->
    </form>
    <small class="form-text text-white-50">We’ll never share your email address with a third-party. </small>
        </div> <!-- col-md-6.// -->
    </div>
    </div>
    </section>
    `;
    return xhtml;
}
function loadFooter() {
    let xhtml=`
    ${loadBeforeFooter()}
    <footer class="section-footer border-top">
	<div class="container">
		<section class="footer-top padding-y">
			<div class="row">
				<aside class="col-md-4">
					<article class="mr-3">
						<img src="images/logo.png" class="logo-footer">
						<p class="mt-3">Some short text about company like You might remember the Dell computer commercials in which a youth reports this exciting news to his friends.</p>
						<div>
						    <a class="btn btn-icon btn-light" title="Facebook" target="_blank" href="#"><i class="fab fa-facebook-f"></i></a>
						    <a class="btn btn-icon btn-light" title="Instagram" target="_blank" href="#"><i class="fab fa-instagram"></i></a>
						    <a class="btn btn-icon btn-light" title="Youtube" target="_blank" href="#"><i class="fab fa-youtube"></i></a>
						    <a class="btn btn-icon btn-light" title="Twitter" target="_blank" href="#"><i class="fab fa-twitter"></i></a>
						</div>
					</article>
				</aside>
				<aside class="col-sm-3 col-md-2">
					<h6 class="title">About</h6>
					<ul class="list-unstyled">
						<li> <a href="#">About us</a></li>
						<li> <a href="#">Services</a></li>
						<li> <a href="#">Rules and terms</a></li>
						<li> <a href="#">Blogs</a></li>
					</ul>
				</aside>
				<aside class="col-sm-3 col-md-2">
					<h6 class="title">Services</h6>
					<ul class="list-unstyled">
						<li> <a href="#">Help center</a></li>
						<li> <a href="#">Money refund</a></li>
						<li> <a href="#">Terms and Policy</a></li>
						<li> <a href="#">Open dispute</a></li>
					</ul>
				</aside>
				<aside class="col-sm-3  col-md-2">
					<h6 class="title">For users</h6>
					<ul class="list-unstyled">
						<li> <a href="#"> User Login </a></li>
						<li> <a href="#"> User register </a></li>
						<li> <a href="#"> Account Setting </a></li>
						<li> <a href="#"> My Orders </a></li>
						<li> <a href="#"> My Wishlist </a></li>
					</ul>
				</aside>
				<aside class="col-sm-2  col-md-2">
					<h6 class="title">Our app</h6>
					<a href="#" class="d-block mb-2"><img src="images/misc/appstore.png" height="40"></a>
					<a href="#" class="d-block mb-2"><img src="images/misc/playmarket.png" height="40"></a>
				</aside>
			</div> <!-- row.// -->
		</section>	<!-- footer-top.// -->

		<section class="footer-copyright border-top">
				<p class="float-left text-muted"> © 2019 Company  All rights resetved </p>
				<p target="_blank" class="float-right text-muted">
					<a href="#">Privacy &amp; Cookies</a> &nbsp;   &nbsp;
					<a href="#">Accessibility</a>
				</p>
		</section>
	</div><!-- //container -->
</footer>
    `;
    return xhtml;
}
function loadMainHeaderBanner(col) {
    let xhtml=``;
    if(col > 0){
        xhtml=xhtml+ `<div class="col-md-9 col-xl-${col} col-lg-${col}">`;
    }
    xhtml=xhtml+ `
    <section class="section-intro">
    <div class="intro-banner-wrap">
        <img src="images/banners/1.jpg" class="w-100 img-fluid">
    </div>    
    </section>
    `;
    if(col > 0){
        xhtml=xhtml+ `</div>`;
    }
    return xhtml;
}

function loadMainHeader() {
    // ${loadMainHeaderSlider()}
    //         ${loadMainHeaderPopular()} 
    // ${loadMainHeaderBanner(9)} 
    let xhtml=`
    <!-- ========================= SECTION MAIN  ========================= -->
    <section class="section-main padding-y">
    <main class="card">
        <div class="card-body">
    
        <div class="row">
            ${loadMainHeaderMenu()}
            ${loadMainHeaderSlider()}
            ${loadMainHeaderPopular()} 
        </div> 
    
        </div> <!-- card-body.// -->
    </main> <!-- card.// -->
    </section>
    <!-- ========================= SECTION MAIN END// ========================= -->
    `;
    return xhtml;
}
function loadMainHeaderMenu() {
    let xhtml=`
    <aside class="col-lg col-md-3 flex-lg-grow-0">
    <h6>MY MARKETS</h6>
    <nav class="nav-home-aside">
        <ul class="menu-category">
            <li><a href="product.html">Fashion and clothes</a></li>
            <li><a href="#">Automobile and motors</a></li>
            <li><a href="#">Gardening and agriculture</a></li>
            <li><a href="#">Electronics and tech</a></li>
            <li><a href="#">Packaginf and printing</a></li>
            <li><a href="#">Home and kitchen</a></li>
            <li><a href="#">Digital goods</a></li>
            <li class="has-submenu"><a href="#">More items</a>
                <ul class="submenu">
                    <li><a href="#">Submenu name</a></li>
                    <li><a href="#">Great submenu</a></li>
                    <li><a href="#">Another menu</a></li>
                    <li><a href="#">Some others</a></li>
                </ul>
            </li>
        </ul>
    </nav>
    </aside> <!-- col.// -->
    `;
    return xhtml;
}
function loadMainHeaderSlider() {
let xhtml=`
<div class="col-md-9 col-xl-7 col-lg-7">
    
<!-- ================== COMPONENT SLIDER  BOOTSTRAP  ==================  -->
<div id="carousel1_indicator" class="slider-home-banner carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carousel1_indicator" data-slide-to="0" class="active"></li>
    <li data-target="#carousel1_indicator" data-slide-to="1"></li>
    <li data-target="#carousel1_indicator" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="images/banners/slide1.jpg" alt="First slide"> 
    </div>
    <div class="carousel-item">
      <img src="images/banners/slide2.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img src="images/banners/slide3.jpg" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carousel1_indicator" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel1_indicator" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> 
</div> <!-- col.// -->
`;
return xhtml;
}
function loadMainHeaderPopular() {
    let xhtml=`
    <div class="col-md d-none d-lg-block flex-grow-1">
    <aside class="special-home-right">
        <h6 class="bg-blue text-center text-white mb-0 p-2">Popular category</h6>
        
        <div class="card-banner border-bottom">
          <div class="py-3" style="width:80%">
            <h6 class="card-title">Men clothing</h6>
            <a href="#" class="btn btn-secondary btn-sm"> Source now </a>
          </div> 
          <img src="images/items/1.jpg" height="80" class="img-bg">
        </div>

        <div class="card-banner border-bottom">
          <div class="py-3" style="width:80%">
            <h6 class="card-title">Winter clothing </h6>
            <a href="#" class="btn btn-secondary btn-sm"> Source now </a>
          </div> 
          <img src="images/items/2.jpg" height="80" class="img-bg">
        </div>

        <div class="card-banner border-bottom">
          <div class="py-3" style="width:80%">
            <h6 class="card-title">Home inventory</h6>
            <a href="#" class="btn btn-secondary btn-sm"> Source now </a>
          </div> 
          <img src="images/items/6.jpg" height="80" class="img-bg">
        </div>

    </aside>
</div> <!-- col.// -->
    `;
    return xhtml;
}
function loadMainProductDeal(){
    let xhtml=`
    <!-- =============== SECTION DEAL =============== -->
    <section class="padding-bottom">
     <div class="card card-deal">
         <div class="col-heading content-body">
          <header class="section-heading">
           <h3 class="section-title">Deals and offers</h3>
           <p>Hygiene equipments</p>
         </header><!-- sect-heading -->
         <div class="timer">
           <div> <span class="num">04</span> <small>Days</small></div>
           <div> <span class="num">12</span> <small>Hours</small></div>
           <div> <span class="num">58</span> <small>Min</small></div>
           <div> <span class="num">02</span> <small>Sec</small></div>
         </div>
       </div> <!-- col.// -->
       <div class="row no-gutters items-wrap">
        <div class="col-md col-6">
         <figure class="card-product-grid card-sm">
          <a href="page-detail-product.html" class="img-wrap"> 
           <img src="images/items/3.jpg"> 
          </a>
          <div class="text-wrap p-3">
               <a href="#" class="title">Summer clothes</a>
               <span class="badge badge-danger"> -20% </span>
          </div>
       </figure>
     </div> <!-- col.// -->
     <div class="col-md col-6">
       <figure class="card-product-grid card-sm">
        <a href="page-detail-product.html" class="img-wrap"> 
         <img src="images/items/4.jpg"> 
       </a>
       <div class="text-wrap p-3">
         <a href="#" class="title">Some category</a>
         <span class="badge badge-danger"> -5% </span>
       </div>
     </figure>
    </div> <!-- col.// -->
    <div class="col-md col-6">
     <figure class="card-product-grid card-sm">
      <a href="page-detail-product.html" class="img-wrap"> 
       <img src="images/items/5.jpg"> 
     </a>
     <div class="text-wrap p-3">
       <a href="#" class="title">Another category</a>
       <span class="badge badge-danger"> -20% </span>
     </div>
    </figure>
    </div> <!-- col.// -->
    <div class="col-md col-6">
     <figure class="card-product-grid card-sm">
      <a href="page-detail-product.html" class="img-wrap"> 
       <img src="images/items/6.jpg"> 
     </a>
     <div class="text-wrap p-3">
       <a href="#" class="title">Home apparel</a>
       <span class="badge badge-danger"> -15% </span>
     </div>
    </figure>
    </div> <!-- col.// -->
    <div class="col-md col-6">
     <figure class="card-product-grid card-sm">
      <a href="page-detail-product.html" class="img-wrap"> 
       <img src="images/items/7.jpg"> 
     </a>
     <div class="text-wrap p-3">
       <a href="#" class="title text-truncate">Smart watches</a>
       <span class="badge badge-danger"> -10% </span>
     </div>
    </figure>
    </div> <!-- col.// -->
    </div>
    </div>
    
    </section>
    <!-- =============== SECTION DEAL // END =============== -->
    `;
    return xhtml
}
function loadMainProductCategory(){
    let xhtml=`
    <!-- =============== SECTION 1 =============== -->
    <section class="padding-bottom">
    <header class="section-heading heading-line">
        <h4 class="title-section text-uppercase">Apparel</h4>
    </header>
    
    <div class="card card-home-category">
    <div class="row no-gutters">
        <div class="col-md-3">
        
        <div class="home-category-banner bg-light-orange">
            <h5 class="title">Best trending clothes only for summer</h5>
            <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <a href="#" class="btn btn-outline-primary rounded-pill">Source now</a>
            <img src="images/items/2.jpg" class="img-bg">
        </div>
    
        </div> <!-- col.// -->
        <div class="col-md-9">
    <ul class="row no-gutters bordered-cols">
        <li class="col-6 col-lg-3 col-md-4">
    <a href="page-detail-product.html" class="item"> 
        <div class="card-body">
            <h6 class="title">Well made women clothes with trending collection  </h6>
            <img class="img-sm float-right" src="images/items/1.jpg"> 
            <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Guanjou, China</p>
        </div>
    </a>
        </li>
        <li class="col-6 col-lg-3 col-md-4">
    <a href="page-detail-product.html" class="item"> 
        <div class="card-body">
            <h6 class="title">Great clothes with trending collection  </h6>
            <img class="img-sm float-right" src="images/items/2.jpg"> 
            <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Beijing, China</p>
        </div>
    </a>
        </li>
        <li class="col-6 col-lg-3 col-md-4">
    <a href="page-detail-product.html" class="item"> 
        <div class="card-body">
            <h6 class="title">Demo clothes with sample collection  </h6>
            <img class="img-sm float-right" src="images/items/3.jpg"> 
            <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Tokyo, Japan</p>
        </div>
    </a>
        </li>
        <li class="col-6 col-lg-3 col-md-4">
    <a href="page-detail-product.html" class="item"> 
        <div class="card-body">
            <h6 class="title">Home and kitchen electronic  stuff collection  </h6>
            <img class="img-sm float-right" src="images/items/4.jpg"> 
            <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Tashkent, Uzb</p>
        </div>
    </a>	
        </li>
        <li class="col-6 col-lg-3 col-md-4">
    <a href="page-detail-product.html" class="item"> 
        <div class="card-body">
            <h6 class="title">Home and kitchen electronic  stuff collection  </h6>
            <img class="img-sm float-right" src="images/items/5.jpg"> 
            <p class="text-muted"><i class="fa fa-map-marker-alt"></i> London, Britain</p>
        </div>
    </a>
        </li>
        <li class="col-6 col-lg-3 col-md-4">
    <a href="page-detail-product.html" class="item"> 
        <div class="card-body">
            <h6 class="title">Home and kitchen electronic  stuff collection  </h6>
            <img class="img-sm float-right" src="images/items/6.jpg"> 
            <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Guanjou, China</p>
        </div>
    </a>
        </li>
        <li class="col-6 col-lg-3 col-md-4">
    <a href="page-detail-product.html" class="item"> 
        <div class="card-body">
            <h6 class="title">Well made clothes with trending collection </h6>
            <img class="img-sm float-right" src="images/items/7.jpg"> 
            <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Hong Kong, China</p>
    
        </div>
    </a>
        </li>
        <li class="col-6 col-lg-3 col-md-4">
    <a href="page-detail-product.html" class="item"> 
        <div class="card-body">
            <h6 class="title">Home and kitchen interior  stuff collection   </h6>
            <img class="img-sm float-right" src="images/items/6.jpg"> 
            <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Guanjou, China</p>
        </div>
    </a>
        </li>
    </ul>
        </div> <!-- col.// -->
    </div> <!-- row.// -->
    </div> <!-- card.// -->
    </section>
    <!-- =============== SECTION 1 END =============== -->
    `;
    return xhtml;
}
function loadMainProductRequest() {
    let xhtml=`
    <!-- =============== SECTION REQUEST =============== -->
    
    <section class="padding-bottom">
    
    <header class="section-heading heading-line">
        <h4 class="title-section text-uppercase">Request for Quotation</h4>
    </header>
    
    <div class="row">
        <div class="col-md-8">
    <div class="card-banner banner-quote overlay-gradient" style="background-image: url('images/banners/banner9.jpg');">
      <div class="card-img-overlay white">
        <h3 class="card-title">An easy way to send request to suppliers</h3>
        <p class="card-text" style="max-width: 400px">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt.</p>
        <a href="" class="btn btn-primary rounded-pill">Learn more</a>
      </div>
    </div>
        </div> <!-- col // -->
        <div class="col-md-4">
    
    <div class="card card-body">
        <h4 class="title py-3">One Request, Multiple Quotes</h4>
        <form>
            <div class="form-group">
                <input class="form-control" name="" placeholder="What are you looking for?" type="text">
            </div>
            <div class="form-group">
                <div class="input-group">
                    <input class="form-control" placeholder="Quantity" name="" type="text">
                    
                    <select class="custom-select form-control">
                        <option>Pieces</option>
                        <option>Litres</option>
                        <option>Tons</option>
                        <option>Gramms</option>
                    </select>
                </div>
            </div>
            <div class="form-group text-muted">
                <p>Select template type:</p>
                <label class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" value="option1">
                  <div class="form-check-label">Request price</div>
                </label>
                <label class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" value="option2">
                  <div class="form-check-label">Request a sample</div>
                </label>
            </div>
            <div class="form-group">
                <button class="btn btn-warning">Request for quote</button>
            </div>
        </form>
    </div>
    
        </div> <!-- col // -->
    </div> <!-- row // -->
    </section>
    
    <!-- =============== SECTION REQUEST .//END =============== -->
    `;
    return xhtml;
}
function loadMainProductPopular() {
    let xhtm=`
    <!-- =============== SECTION ITEMS =============== -->
    <section  class="padding-bottom-sm">
    
    <header class="section-heading heading-line">
        <h4 class="title-section text-uppercase">Recommended items</h4>
    </header>
    
    <div class="row row-sm">
        <div class="col-xl-2 col-lg-3 col-md-4 col-6">
            <div href="#" class="card card-sm card-product-grid">
                <a href="page-detail-product.html" class="img-wrap"> <img src="images/items/1.jpg"> </a>
                <figcaption class="info-wrap">
                    <a href="#" class="title">Just another product name</a>
                    <div class="price mt-1">$179.00</div> <!-- price-wrap.// -->
                </figcaption>
            </div>
        </div> <!-- col.// -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-6">
            <div href="#" class="card card-sm card-product-grid">
                <a href="page-detail-product.html" class="img-wrap"> <img src="images/items/2.jpg"> </a>
                <figcaption class="info-wrap">
                    <a href="#" class="title">Some item name here</a>
                    <div class="price mt-1">$280.00</div> <!-- price-wrap.// -->
                </figcaption>
            </div>
        </div> <!-- col.// -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-6">
            <div href="#" class="card card-sm card-product-grid">
                <a href="page-detail-product.html" class="img-wrap"> <img src="images/items/3.jpg"> </a>
                <figcaption class="info-wrap">
                    <a href="#" class="title">Great product name here</a>
                    <div class="price mt-1">$56.00</div> <!-- price-wrap.// -->
                </figcaption>
            </div>
        </div> <!-- col.// -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-6">
            <div href="#" class="card card-sm card-product-grid">
                <a href="page-detail-product.html" class="img-wrap"> <img src="images/items/4.jpg"> </a>
                <figcaption class="info-wrap">
                    <a href="#" class="title">Just another product name</a>
                    <div class="price mt-1">$179.00</div> <!-- price-wrap.// -->
                </figcaption>
            </div>
        </div> <!-- col.// -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-6">
            <div href="#" class="card card-sm card-product-grid">
                <a href="page-detail-product.html" class="img-wrap"> <img src="images/items/5.jpg"> </a>
                <figcaption class="info-wrap">
                    <a href="#" class="title">Just another product name</a>
                    <div class="price mt-1">$179.00</div> <!-- price-wrap.// -->
                </figcaption>
            </div>
        </div> <!-- col.// -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-6">
            <div href="#" class="card card-sm card-product-grid">
                <a href="page-detail-product.html" class="img-wrap"> <img src="images/items/6.jpg"> </a>
                <figcaption class="info-wrap">
                    <a href="#" class="title">Some item name here</a>
                    <div class="price mt-1">$280.00</div> <!-- price-wrap.// -->
                </figcaption>
            </div>
        </div> <!-- col.// -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-6">
            <div href="#" class="card card-sm card-product-grid">
                <a href="page-detail-product.html" class="img-wrap"> <img src="images/items/7.jpg"> </a>
                <figcaption class="info-wrap">
                    <a href="#" class="title">Great product name here</a>
                    <div class="price mt-1">$56.00</div> <!-- price-wrap.// -->
                </figcaption>
            </div>
        </div> <!-- col.// -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-6">
            <div href="#" class="card card-sm card-product-grid">
                <a href="page-detail-product.html" class="img-wrap"> <img src="images/items/9.jpg"> </a>
                <figcaption class="info-wrap">
                    <a href="#" class="title">Just another product name</a>
                    <div class="price mt-1">$179.00</div> <!-- price-wrap.// -->
                </figcaption>
            </div>
        </div> <!-- col.// -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-6">
            <div href="#" class="card card-sm card-product-grid">
                <a href="page-detail-product.html" class="img-wrap"> <img src="images/items/4.jpg"> </a>
                <figcaption class="info-wrap">
                    <a href="#" class="title">Just another product name</a>
                    <div class="price mt-1">$179.00</div> <!-- price-wrap.// -->
                </figcaption>
            </div>
        </div> <!-- col.// -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-6">
            <div href="#" class="card card-sm card-product-grid">
                <a href="page-detail-product.html" class="img-wrap"> <img src="images/items/5.jpg"> </a>
                <figcaption class="info-wrap">
                    <a href="#" class="title">Just another product name</a>
                    <div class="price mt-1">$179.00</div> <!-- price-wrap.// -->
                </figcaption>
            </div>
        </div> <!-- col.// -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-6">
            <div href="#" class="card card-sm card-product-grid">
                <a href="page-detail-product.html" class="img-wrap"> <img src="images/items/6.jpg"> </a>
                <figcaption class="info-wrap">
                    <a href="#" class="title">Some item name here</a>
                    <div class="price mt-1">$280.00</div> <!-- price-wrap.// -->
                </figcaption>
            </div>
        </div> <!-- col.// -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-6">
            <div href="#" class="card card-sm card-product-grid">
                <a href="page-detail-product.html" class="img-wrap"> <img src="images/items/7.jpg"> </a>
                <figcaption class="info-wrap">
                    <a href="#" class="title">Great product name here</a>
                    <div class="price mt-1">$56.00</div> <!-- price-wrap.// -->
                </figcaption>
            </div>
        </div> <!-- col.// -->
    </div> <!-- row.// -->
    </section>
    <!-- =============== SECTION ITEMS .//END =============== -->
    `;
    return xhtm;
}
function loadMainServices() {
    let xhtml=`
    <!-- =============== SECTION SERVICES =============== -->
    <section  class="padding-bottom">
    
    <header class="section-heading heading-line">
        <h4 class="title-section text-uppercase">Trade services</h4>
    </header>
    
    <div class="row">
        <div class="col-md-3 col-sm-6">
            <article class="card card-post">
              <img src="images/posts/1.jpg" class="card-img-top">
              <div class="card-body">
                <h6 class="title">Trade Assurance</h6>
                <p class="small text-uppercase text-muted">Order protection</p>
              </div>
            </article> <!-- card.// -->
        </div> <!-- col.// -->
        <div class="col-md-3 col-sm-6">
            <article class="card card-post">
              <img src="images/posts/2.jpg" class="card-img-top">
              <div class="card-body">
                <h6 class="title">Pay anytime</h6>
                <p class="small text-uppercase text-muted">Finance solution</p>
              </div>
            </article> <!-- card.// -->
        </div> <!-- col.// -->
        <div class="col-md-3 col-sm-6">
            <article class="card card-post">
              <img src="images/posts/3.jpg" class="card-img-top">
              <div class="card-body">
                <h6 class="title">Inspection solution</h6>
                <p class="small text-uppercase text-muted">Easy Inspection</p>
              </div>
            </article> <!-- card.// -->
        </div> <!-- col.// -->
        <div class="col-md-3 col-sm-6">
            <article class="card card-post">
              <img src="images/posts/4.jpg" class="card-img-top">
              <div class="card-body">
                <h6 class="title">Ocean and Air Shipping</h6>
                <p class="small text-uppercase text-muted">Logistic services</p>
              </div>
            </article> <!-- card.// -->
        </div> <!-- col.// -->
    </div> <!-- row.// -->
    
    </section>
    <!-- =============== SECTION SERVICES .//END =============== -->
    `;
    return xhtml;
}
function loadMainRegion() {
    let xhtml=`
    <!-- =============== SECTION REGION =============== -->
    <section  class="padding-bottom">
    
    <header class="section-heading heading-line">
        <h4 class="title-section text-uppercase">Choose region</h4>
    </header>
    
    <ul class="row mt-4">
        <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="images/icons/flags/CN.png"> <span>China</span> </a></li>
        <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="images/icons/flags/DE.png"> <span>Germany</span> </a></li>
        <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="images/icons/flags/AU.png"> <span>Australia</span> </a></li>
        <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="images/icons/flags/RU.png"> <span>Russia</span> </a></li>
        <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="images/icons/flags/IN.png"> <span>India</span> </a></li>
        <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="images/icons/flags/GB.png"> <span>England</span> </a></li>
        <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="images/icons/flags/TR.png"> <span>Turkey</span> </a></li>
        <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="images/icons/flags/UZ.png"> <span>Uzbekistan</span> </a></li>
        <li class="col-md col-6"><a href="#" class="icontext"> <i class="mr-3 fa fa-ellipsis-h"></i> <span>More regions</span> </a></li>
    </ul>
    </section>
    <!-- =============== SECTION REGION .//END =============== -->
    `;
    return xhtml;
}
function loadMainBanner() {
    let xhtml=`
    <article class="my-4">
    <img src="images/banners/ad-sm.png" class="w-100">
    </article>
    `;
    return xhtml;
}

function loadMainProductGrid() {
    let xhtml=`
    <!-- ========================= SECTION PAGETOP ========================= -->
    <section class="section-pagetop bg">
    <div class="container">
        <h2 class="title-page">Category products</h2>
        <nav>
        <ol class="breadcrumb text-white">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Best category</a></li>
            <li class="breadcrumb-item active" aria-current="page">Great articles</li>
        </ol>  
        </nav>
    </div> <!-- container //  -->
    </section>
    <!-- ========================= SECTION INTRO END// ========================= -->
    
    <!-- ========================= SECTION CONTENT ========================= -->
    <section class="section-content padding-y">
    <div class="container">
    
    <div class="row">
        <aside class="col-md-3">
            
    <div class="card">
        <article class="filter-group">
            <header class="card-header">
                <a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" class="">
                    <i class="icon-control fa fa-chevron-down"></i>
                    <h6 class="title">Product type</h6>
                </a>
            </header>
            <div class="filter-content collapse show" id="collapse_1" style="">
                <div class="card-body">
                    <form class="pb-3">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Search">
                      <div class="input-group-append">
                        <button class="btn btn-light" type="button"><i class="fa fa-search"></i></button>
                      </div>
                    </div>
                    </form>
                    
                    <ul class="list-menu">
                    <li><a href="#">People  </a></li>
                    <li><a href="#">Watches </a></li>
                    <li><a href="#">Cinema  </a></li>
                    <li><a href="#">Clothes  </a></li>
                    <li><a href="#">Home items </a></li>
                    <li><a href="#">Animals</a></li>
                    <li><a href="#">People </a></li>
                    </ul>
    
                </div> <!-- card-body.// -->
            </div>
        </article> <!-- filter-group  .// -->
        <article class="filter-group">
            <header class="card-header">
                <a href="#" data-toggle="collapse" data-target="#collapse_2" aria-expanded="true" class="">
                    <i class="icon-control fa fa-chevron-down"></i>
                    <h6 class="title">Brands </h6>
                </a>
            </header>
            <div class="filter-content collapse show" id="collapse_2" style="">
                <div class="card-body">
                    <label class="custom-control custom-checkbox">
                      <input type="checkbox" checked="" class="custom-control-input">
                      <div class="custom-control-label">Mercedes  
                          <b class="badge badge-pill badge-light float-right">120</b>  </div>
                    </label>
                    <label class="custom-control custom-checkbox">
                      <input type="checkbox" checked="" class="custom-control-input">
                      <div class="custom-control-label">Toyota 
                          <b class="badge badge-pill badge-light float-right">15</b>  </div>
                    </label>
                    <label class="custom-control custom-checkbox">
                      <input type="checkbox" checked="" class="custom-control-input">
                      <div class="custom-control-label">Mitsubishi 
                          <b class="badge badge-pill badge-light float-right">35</b> </div>
                    </label>
                    <label class="custom-control custom-checkbox">
                      <input type="checkbox" checked="" class="custom-control-input">
                      <div class="custom-control-label">Nissan 
                          <b class="badge badge-pill badge-light float-right">89</b> </div>
                    </label>
                    <label class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input">
                      <div class="custom-control-label">Honda 
                          <b class="badge badge-pill badge-light float-right">30</b>  </div>
                    </label>
        </div> <!-- card-body.// -->
            </div>
        </article> <!-- filter-group .// -->
        <article class="filter-group">
            <header class="card-header">
                <a href="#" data-toggle="collapse" data-target="#collapse_3" aria-expanded="true" class="">
                    <i class="icon-control fa fa-chevron-down"></i>
                    <h6 class="title">Price range </h6>
                </a>
            </header>
            <div class="filter-content collapse show" id="collapse_3" style="">
                <div class="card-body">
                    <input type="range" class="custom-range" min="0" max="100" name="">
                    <div class="form-row">
                    <div class="form-group col-md-6">
                      <label>Min</label>
                      <input class="form-control" placeholder="$0" type="number">
                    </div>
                    <div class="form-group text-right col-md-6">
                      <label>Max</label>
                      <input class="form-control" placeholder="$1,0000" type="number">
                    </div>
                    </div> <!-- form-row.// -->
                    <button class="btn btn-block btn-primary">Apply</button>
                </div><!-- card-body.// -->
            </div>
        </article> <!-- filter-group .// -->
        <article class="filter-group">
            <header class="card-header">
                <a href="#" data-toggle="collapse" data-target="#collapse_4" aria-expanded="true" class="">
                    <i class="icon-control fa fa-chevron-down"></i>
                    <h6 class="title">Sizes </h6>
                </a>
            </header>
            <div class="filter-content collapse show" id="collapse_4" style="">
                <div class="card-body">
                  <label class="checkbox-btn">
                    <input type="checkbox">
                    <span class="btn btn-light"> XS </span>
                  </label>
    
                  <label class="checkbox-btn">
                    <input type="checkbox">
                    <span class="btn btn-light"> SM </span>
                  </label>
    
                  <label class="checkbox-btn">
                    <input type="checkbox">
                    <span class="btn btn-light"> LG </span>
                  </label>
    
                  <label class="checkbox-btn">
                    <input type="checkbox">
                    <span class="btn btn-light"> XXL </span>
                  </label>
            </div><!-- card-body.// -->
            </div>
        </article> <!-- filter-group .// -->
        <article class="filter-group">
            <header class="card-header">
                <a href="#" data-toggle="collapse" data-target="#collapse_5" aria-expanded="false" class="">
                    <i class="icon-control fa fa-chevron-down"></i>
                    <h6 class="title">More filter </h6>
                </a>
            </header>
            <div class="filter-content collapse in" id="collapse_5" style="">
                <div class="card-body">
                    <label class="custom-control custom-radio">
                      <input type="radio" name="myfilter_radio" checked="" class="custom-control-input">
                      <div class="custom-control-label">Any condition</div>
                    </label>
    
                    <label class="custom-control custom-radio">
                      <input type="radio" name="myfilter_radio" class="custom-control-input">
                      <div class="custom-control-label">Brand new </div>
                    </label>
    
                    <label class="custom-control custom-radio">
                      <input type="radio" name="myfilter_radio" class="custom-control-input">
                      <div class="custom-control-label">Used items</div>
                    </label>
    
                    <label class="custom-control custom-radio">
                      <input type="radio" name="myfilter_radio" class="custom-control-input">
                      <div class="custom-control-label">Very old</div>
                    </label>
                </div><!-- card-body.// -->
            </div>
        </article> <!-- filter-group .// -->
    </div> <!-- card.// -->
    
        </aside> <!-- col.// -->
        <main class="col-md-9">
    
    <header class="border-bottom mb-4 pb-3">
            <div class="form-inline">
                <span class="mr-md-auto">32 Items found </span>
                <select class="mr-2 form-control">
                    <option>Latest items</option>
                    <option>Trending</option>
                    <option>Most Popular</option>
                    <option>Cheapest</option>
                </select>
                ${btnProduct()}
            </div>
    </header><!-- sect-heading -->
    
    <div class="row">
        <div class="col-md-4">
            <figure class="card card-product-grid">
                <div class="img-wrap"> 
                    <span class="badge badge-danger"> NEW </span>
                    <img src="images/items/1.jpg">
                    <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                </div> <!-- img-wrap.// -->
                <figcaption class="info-wrap">
                    <div class="fix-height">
                        <a href="#" class="title">Great item name goes here</a>
                        <div class="price-wrap mt-2">
                            <span class="price">$1280</span>
                            <del class="price-old">$1980</del>
                        </div> <!-- price-wrap.// -->
                    </div>
                    <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                </figcaption>
            </figure>
        </div> <!-- col.// -->
    
        <div class="col-md-4">
            <figure class="card card-product-grid">
                <div class="img-wrap"> 
                    <img src="images/items/2.jpg">
                    <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                </div> <!-- img-wrap.// -->
                <figcaption class="info-wrap">
                    <div class="fix-height">
                        <a href="#" class="title">Product name goes here just for demo item</a>
                        <div class="price-wrap mt-2">
                            <span class="price">$1280</span>
                        </div> <!-- price-wrap.// -->
                    </div>
                    <a href="#" class="btn btn-block btn-primary">Add to cart </a>	
                </figcaption>
            </figure>
        </div> <!-- col.// -->
    
        <div class="col-md-4">
            <figure class="card card-product-grid">
                <div class="img-wrap"> 
                    <img src="images/items/3.jpg">
                    <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                </div> <!-- img-wrap.// -->
                <figcaption class="info-wrap">
                    <div class="fix-height">
                        <a href="#" class="title">Product name goes here just for demo item</a>
                        <div class="price-wrap mt-2">
                            <span class="price">$1280</span>
                        </div> <!-- price-wrap.// -->
                    </div>
                    <a href="#" class="btn btn-block btn-primary">Add to cart </a>	
                </figcaption>
            </figure>
        </div> <!-- col.// -->
    
        <div class="col-md-4">
            <figure class="card card-product-grid">
                <div class="img-wrap"> 
                    <img src="images/items/4.jpg">
                    <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                </div> <!-- img-wrap.// -->
                <figcaption class="info-wrap">
                    <div class="fix-height">
                        <a href="#" class="title">Product name goes here just for demo item</a>
                        <div class="price-wrap mt-2">
                            <span class="price">$1280</span>
                        </div> <!-- price-wrap.// -->
                    </div>
                    <a href="#" class="btn btn-block btn-primary">Add to cart </a>	
                </figcaption>
            </figure>
        </div> <!-- col.// -->
    
        <div class="col-md-4">
            <figure class="card card-product-grid">
                <div class="img-wrap"> 
                    <img src="images/items/5.jpg">
                    <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                </div> <!-- img-wrap.// -->
                <figcaption class="info-wrap">
                    <div class="fix-height">
                        <a href="#" class="title">Product name goes here just for demo item</a>
                        <div class="price-wrap mt-2">
                            <span class="price">$1280</span>
                        </div> <!-- price-wrap.// -->
                    </div>
                    <a href="#" class="btn btn-block btn-primary">Add to cart </a>	
                </figcaption>
            </figure>
        </div> <!-- col.// -->
    
        <div class="col-md-4">
            <figure class="card card-product-grid">
                <div class="img-wrap"> 
                    <img src="images/items/6.jpg">
                    <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                </div> <!-- img-wrap.// -->
                <figcaption class="info-wrap">
                    <div class="fix-height">
                        <a href="#" class="title">Product name goes here just for demo item</a>
                        <div class="price-wrap mt-2">
                            <span class="price">$1280</span>
                        </div> <!-- price-wrap.// -->
                    </div>
                    <a href="#" class="btn btn-block btn-primary">Add to cart </a>	
                </figcaption>
            </figure>
        </div> <!-- col.// -->
    
        <div class="col-md-4">
            <figure class="card card-product-grid">
                <div class="img-wrap"> 
                    <img src="images/items/7.jpg">
                    <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                </div> <!-- img-wrap.// -->
                <figcaption class="info-wrap">
                    <div class="fix-height">
                        <a href="#" class="title">Product name goes here just for demo item</a>
                        <div class="price-wrap mt-2">
                            <span class="price">$1280</span>
                        </div> <!-- price-wrap.// -->
                    </div>
                    <a href="#" class="btn btn-block btn-primary">Add to cart </a>	
                </figcaption>
            </figure>
        </div> <!-- col.// -->
    
        <div class="col-md-4">
            <figure class="card card-product-grid">
                <div class="img-wrap"> 
                    <img src="images/items/1.jpg">
                    <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                </div> <!-- img-wrap.// -->
                <figcaption class="info-wrap">
                    <div class="fix-height">
                        <a href="#" class="title">Product name goes here just for demo item</a>
                        <div class="price-wrap mt-2">
                            <span class="price">$1280</span>
                        </div> <!-- price-wrap.// -->
                    </div>
                    <a href="#" class="btn btn-block btn-primary">Add to cart </a>	
                </figcaption>
            </figure>
        </div> <!-- col.// -->
    </div> <!-- row end.// -->
    
    
    <nav class="mt-4" aria-label="Page navigation sample">
      <ul class="pagination">
        <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
    
        </main> <!-- col.// -->
    
    </div>
    
    </div> <!-- container .//  -->
    </section>
    <!-- ========================= SECTION CONTENT END// ========================= -->
    `;
    return xhtml;
}
function loadMainProductList() {
    let xhtml=`
    <!-- ========================= SECTION PAGETOP ========================= -->
    <section class="section-pagetop bg">
    <div class="container">
        <h2 class="title-page">Category products</h2>
        <nav>
        <ol class="breadcrumb text-white">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Best category</a></li>
            <li class="breadcrumb-item active" aria-current="page">Great articles</li>
        </ol>  
        </nav>
    </div> <!-- container //  -->
    </section>
    <!-- ========================= SECTION INTRO END// ========================= -->
    
    <!-- ========================= SECTION CONTENT ========================= -->
    <section class="section-content padding-y">
    <div class="container">
    
    <div class="row">
        <aside class="col-md-3">
            
    <div class="card">
        <article class="filter-group">
            <header class="card-header">
                <a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" class="">
                    <i class="icon-control fa fa-chevron-down"></i>
                    <h6 class="title">Product type</h6>
                </a>
            </header>
            <div class="filter-content collapse show" id="collapse_1" style="">
                <div class="card-body">
                    <form class="pb-3">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Search">
                      <div class="input-group-append">
                        <button class="btn btn-light" type="button"><i class="fa fa-search"></i></button>
                      </div>
                    </div>
                    </form>
                    
                    <ul class="list-menu">
                    <li><a href="#">People  </a></li>
                    <li><a href="#">Watches </a></li>
                    <li><a href="#">Cinema  </a></li>
                    <li><a href="#">Clothes  </a></li>
                    <li><a href="#">Home items </a></li>
                    <li><a href="#">Animals</a></li>
                    <li><a href="#">People </a></li>
                    </ul>
    
                </div> <!-- card-body.// -->
            </div>
        </article> <!-- filter-group  .// -->
        <article class="filter-group">
            <header class="card-header">
                <a href="#" data-toggle="collapse" data-target="#collapse_2" aria-expanded="true" class="">
                    <i class="icon-control fa fa-chevron-down"></i>
                    <h6 class="title">Brands </h6>
                </a>
            </header>
            <div class="filter-content collapse show" id="collapse_2" style="">
                <div class="card-body">
                    <label class="custom-control custom-checkbox">
                      <input type="checkbox" checked="" class="custom-control-input">
                      <div class="custom-control-label">Mercedes  
                          <b class="badge badge-pill badge-light float-right">120</b>  </div>
                    </label>
                    <label class="custom-control custom-checkbox">
                      <input type="checkbox" checked="" class="custom-control-input">
                      <div class="custom-control-label">Toyota 
                          <b class="badge badge-pill badge-light float-right">15</b>  </div>
                    </label>
                    <label class="custom-control custom-checkbox">
                      <input type="checkbox" checked="" class="custom-control-input">
                      <div class="custom-control-label">Mitsubishi 
                          <b class="badge badge-pill badge-light float-right">35</b> </div>
                    </label>
                    <label class="custom-control custom-checkbox">
                      <input type="checkbox" checked="" class="custom-control-input">
                      <div class="custom-control-label">Nissan 
                          <b class="badge badge-pill badge-light float-right">89</b> </div>
                    </label>
                    <label class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input">
                      <div class="custom-control-label">Honda 
                          <b class="badge badge-pill badge-light float-right">30</b>  </div>
                    </label>
        </div> <!-- card-body.// -->
            </div>
        </article> <!-- filter-group .// -->
        <article class="filter-group">
            <header class="card-header">
                <a href="#" data-toggle="collapse" data-target="#collapse_3" aria-expanded="true" class="">
                    <i class="icon-control fa fa-chevron-down"></i>
                    <h6 class="title">Price range </h6>
                </a>
            </header>
            <div class="filter-content collapse show" id="collapse_3" style="">
                <div class="card-body">
                    <input type="range" class="custom-range" min="0" max="100" name="">
                    <div class="form-row">
                    <div class="form-group col-md-6">
                      <label>Min</label>
                      <input class="form-control" placeholder="$0" type="number">
                    </div>
                    <div class="form-group text-right col-md-6">
                      <label>Max</label>
                      <input class="form-control" placeholder="$1,0000" type="number">
                    </div>
                    </div> <!-- form-row.// -->
                    <button class="btn btn-block btn-primary">Apply</button>
                </div><!-- card-body.// -->
            </div>
        </article> <!-- filter-group .// -->
        <article class="filter-group">
            <header class="card-header">
                <a href="#" data-toggle="collapse" data-target="#collapse_4" aria-expanded="true" class="">
                    <i class="icon-control fa fa-chevron-down"></i>
                    <h6 class="title">Sizes </h6>
                </a>
            </header>
            <div class="filter-content collapse show" id="collapse_4" style="">
                <div class="card-body">
                  <label class="checkbox-btn">
                    <input type="checkbox">
                    <span class="btn btn-light"> XS </span>
                  </label>
    
                  <label class="checkbox-btn">
                    <input type="checkbox">
                    <span class="btn btn-light"> SM </span>
                  </label>
    
                  <label class="checkbox-btn">
                    <input type="checkbox">
                    <span class="btn btn-light"> LG </span>
                  </label>
    
                  <label class="checkbox-btn">
                    <input type="checkbox">
                    <span class="btn btn-light"> XXL </span>
                  </label>
            </div><!-- card-body.// -->
            </div>
        </article> <!-- filter-group .// -->
        <article class="filter-group">
            <header class="card-header">
                <a href="#" data-toggle="collapse" data-target="#collapse_5" aria-expanded="false" class="">
                    <i class="icon-control fa fa-chevron-down"></i>
                    <h6 class="title">More filter </h6>
                </a>
            </header>
            <div class="filter-content collapse in" id="collapse_5" style="">
                <div class="card-body">
                    <label class="custom-control custom-radio">
                      <input type="radio" name="myfilter_radio" checked="" class="custom-control-input">
                      <div class="custom-control-label">Any condition</div>
                    </label>
    
                    <label class="custom-control custom-radio">
                      <input type="radio" name="myfilter_radio" class="custom-control-input">
                      <div class="custom-control-label">Brand new </div>
                    </label>
    
                    <label class="custom-control custom-radio">
                      <input type="radio" name="myfilter_radio" class="custom-control-input">
                      <div class="custom-control-label">Used items</div>
                    </label>
    
                    <label class="custom-control custom-radio">
                      <input type="radio" name="myfilter_radio" class="custom-control-input">
                      <div class="custom-control-label">Very old</div>
                    </label>
                </div><!-- card-body.// -->
            </div>
        </article> <!-- filter-group .// -->
    </div> <!-- card.// -->
    
        </aside> <!-- col.// -->
        <main class="col-md-9">
    
    <header class="border-bottom mb-4 pb-3">
            <div class="form-inline">
                <span class="mr-md-auto">32 Items found </span>
                <select class="mr-2 form-control">
                    <option>Latest items</option>
                    <option>Trending</option>
                    <option>Most Popular</option>
                    <option>Cheapest</option>
                </select>
                ${btnProduct()}
            </div>
    </header><!-- sect-heading -->
    
    
    <article class="card card-product-list">
        <div class="row no-gutters">
            <aside class="col-md-3">
                <a href="#" class="img-wrap">
                    <span class="badge badge-danger"> NEW </span>
                    <img src="images/items/3.jpg">
                </a>
            </aside> <!-- col.// -->
            <div class="col-md-6">
                <div class="info-main">
                    <a href="#" class="h5 title"> Great product name goes here  </a>
                    <div class="rating-wrap mb-3">
                        <ul class="rating-stars">
                            <li style="width:80%" class="stars-active"> 
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i> 
                            </li>
                            <li>
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i> 
                            </li>
                        </ul>
                        <div class="label-rating">7/10</div>
                    </div> <!-- rating-wrap.// -->
                    
                    <p> Take it as demo specs, ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim veniam </p>
                </div> <!-- info-main.// -->
            </div> <!-- col.// -->
            <aside class="col-sm-3">
                <div class="info-aside">
                    <div class="price-wrap">
                        <span class="price h5"> $140 </span>	
                        <del class="price-old"> $198</del>
                    </div> <!-- info-price-detail // -->
                    <p class="text-success">Free shipping</p>
                    <br>
                    <p>
                        <a href="#" class="btn btn-primary btn-block"> Details </a>
                        <a href="#" class="btn btn-light btn-block"><i class="fa fa-heart"></i> 
                            <span class="text">Add to wishlist</span>
                        </a>
                    </p>
                </div> <!-- info-aside.// -->
            </aside> <!-- col.// -->
        </div> <!-- row.// -->
    </article> <!-- card-product .// -->
    
    
    <article class="card card-product-list">
        <div class="row no-gutters">
            <aside class="col-md-3">
                <a href="#" class="img-wrap"><img src="images/items/4.jpg"></a>
            </aside> <!-- col.// -->
            <div class="col-md-6">
                <div class="info-main">
                    <a href="#" class="h5 title"> Great product name goes here  </a>
                    <div class="rating-wrap mb-3">
                        <ul class="rating-stars">
                            <li style="width:80%" class="stars-active"> 
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i> 
                            </li>
                            <li>
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i> 
                            </li>
                        </ul>
                        <div class="label-rating">7/10</div>
                    </div> <!-- rating-wrap.// -->
                    
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim veniam </p>
                </div> <!-- info-main.// -->
            </div> <!-- col.// -->
            <aside class="col-sm-3">
                <div class="info-aside">
                    <div class="price-wrap">
                        <span class="price h5"> $56 </span>	
                        <del class="price-old"> $85</del>
                    </div> <!-- info-price-detail // -->
                    <p class="text-success">Free shipping</p>
                    <br>
                    <p>
                        <a href="#" class="btn btn-primary btn-block"> Details </a>
                        <a href="#" class="btn btn-light btn-block"><i class="fa fa-heart"></i> 
                            <span class="text">Add to wishlist</span></a>
                    </p>
                </div> <!-- info-aside.// -->
            </aside> <!-- col.// -->
        </div> <!-- row.// -->
    </article> <!-- card-product .// -->
    
    <article class="card card-product-list">
        <div class="row no-gutters">
            <aside class="col-md-3">
                <a href="#" class="img-wrap"><img src="images/items/5.jpg"></a>
            </aside> <!-- col.// -->
            <div class="col-md-6">
                <div class="info-main">
                    <a href="#" class="h5 title"> Great product name goes here  </a>
                    <div class="rating-wrap mb-3">
                        <ul class="rating-stars">
                            <li style="width:80%" class="stars-active"> 
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i> 
                            </li>
                            <li>
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i> 
                            </li>
                        </ul>
                        <div class="label-rating">7/10</div>
                    </div> <!-- rating-wrap.// -->
                    
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim veniam </p>
                </div> <!-- info-main.// -->
            </div> <!-- col.// -->
            <aside class="col-sm-3">
                <div class="info-aside">
                    <div class="price-wrap">
                        <span class="price h5"> $56.00 </span>	
                    </div> <!-- info-price-detail // -->
                    <p class="text-success">Free shipping</p>
                    <br>
                    <p>
                        <a href="#" class="btn btn-primary btn-block"> Details </a>
                        <a href="#" class="btn btn-light btn-block"><i class="fa fa-heart"></i> 
                            <span class="text">Add to wishlist</span>
                        </a>
                    </p>
                </div> <!-- info-aside.// -->
            </aside> <!-- col.// -->
        </div> <!-- row.// -->
    </article> <!-- card-product .// -->
    
    <article class="card card-product-list">
        <div class="row no-gutters">
            <aside class="col-md-3">
                <a href="#" class="img-wrap"><img src="images/items/6.jpg"></a>
            </aside> <!-- col.// -->
            <div class="col-md-6">
                <div class="info-main">
                    <a href="#" class="h5 title"> Product name can be here  </a>
                    <div class="rating-wrap mb-3">
                        <ul class="rating-stars">
                            <li style="width:80%" class="stars-active"> 
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i> 
                            </li>
                            <li>
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i> 
                            </li>
                        </ul>
                        <div class="label-rating">7/10</div>
                    </div> <!-- rating-wrap.// -->
                    
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim veniam </p>
                </div> <!-- info-main.// -->
            </div> <!-- col.// -->
            <aside class="col-sm-3">
                <div class="info-aside">
                    <div class="price-wrap">
                        <span class="price h5"> $62 </span>	
                    </div> <!-- info-price-detail // -->
                    <p class="text-success">Free shipping</p>
                    <br>
                    <p>
                        <a href="#" class="btn btn-primary btn-block"> Details </a>
                        <a href="#" class="btn btn-light btn-block"><i class="fa fa-heart"></i> 
                            <span class="text">Add to wishlist</span> 
                        </a>
                    </p>
                </div> <!-- info-aside.// -->
            </aside> <!-- col.// -->
        </div> <!-- row.// -->
    </article> <!-- card-product .// -->
    
    
    
    
    <nav aria-label="Page navigation sample">
      <ul class="pagination">
        <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
    
        </main> <!-- col.// -->
    
    </div>
    
    </div> <!-- container .//  -->
    </section>
    <!-- ========================= SECTION CONTENT END// ========================= -->
    `;
    return xhtml;
}
function btnProduct() {
    let xhtml=`
    <div class="btn-group">
    <a href="#" onclick="chooseStyleProduct(1)" class="btn btn-outline-secondary"  title="List view"> 
        <i class="fa fa-bars"></i></a>
    <a href="#" onclick="chooseStyleProduct(2)"  class="btn  btn-outline-secondary"  title="Grid view"> 
        <i class="fa fa-th"></i></a>
    </div>
    `;
    return xhtml;    
}
function chooseStyleProduct(id) {
   if(id === 1) document.getElementById("main").innerHTML = loadMainProductList();
   if(id === 2) document.getElementById("main").innerHTML = loadMainProductGrid();
}
function loadMainTest(){
     return loadMainIndex();
    // return loadProductSlider();
    // return loadAllProduct();
    // let xhtml=`<div class="container"><div class="row" style="margin:10px 0">`;
               
    // xhtml=xhtml+`</div></div>`;
    // return xhtml;
}
function loadProductSlider(){
    let xhtml=`<div class="container"><div class="row" style="margin:10px 0">
               <div class="slider-items-owl owl-carousel owl-theme"> 
                `;
    for(i=1;i<=5;i++){                
    xhtml = xhtml+`
            <div class="item-slide">
            <figure class="card card-product-grid">
                <a href="#" class="img-wrap">
                    <span class="topbar">
                            <span class="badge badge-success"> NEW </span>
                            <span class="float-right"> <i class="fa fa-heart"></i> </span>
                    </span>
                    <img src="images/items/${i}.jpg">
                    <a class="btn-overlay" href="#" style="bottom:50%"><i class="fa fa-search-plus"></i> Quick view</a>
                </a>
                <figcaption class="info-wrap border-top">
                    <a href="#" class="title">Fjällräven Kånken Backpack Blue Ridge</a>            
                    <div class="price-wrap mt-2">
                        <span class="price">$12.99</span>
                        <small class="price-old">$14.99</small>
                        <a href="#" class="btn btn-sm btn-outline-primary float-right">Add to cart <i class="fa fa-shopping-cart"></i></a>
                    </div>
                    <!-- action-wrap.end -->
                </figcaption>
            </figure>
            </div>
    `;
    }
    xhtml=xhtml+`</div></div></div>`;
    return xhtml;
}
function loadAllProduct(){
    let xhtml=`<div class="container"><div class="row" style="margin-top:10px">`;
    for(i=0;i<=11;i++){
    xhtml=xhtml + `
    <div class="col-md-3 col-sm-6">
    <figure class="card card-product-grid">
        <a href="#" class="img-wrap">
            <span class="topbar">
                    <span class="badge badge-success"> NEW </span>
                    <span class="float-right"> <i class="fa fa-heart"></i> </span>
            </span>
            <img src="images/items/4.jpg">
            <a class="btn-overlay" href="#" style="bottom:50%"><i class="fa fa-search-plus"></i> Quick view</a>
        </a>
        <figcaption class="info-wrap border-top">
            <a href="#" class="title">Fjällräven Kånken Backpack Blue Ridge</a>            
            <div class="price-wrap mt-2">
                <span class="price">$12.99</span>
                <small class="price-old">$14.99</small>
                <a href="#" class="btn btn-sm btn-outline-primary float-right">Add to cart <i class="fa fa-shopping-cart"></i></a>
			</div>
            <!-- action-wrap.end -->
        </figcaption>
    </figure> <!-- card // -->
    </div>
    `;
    }
    xhtml=xhtml+`</div></div>`;
    return xhtml;
}
function loadPage() {
    document.getElementById("header").innerHTML = loadHeader();    
    document.getElementById("footer").innerHTML = loadFooter();
    // xữ lý trang: 
    let pathname = window.location.pathname;
    if(pathname === "/") pathname = "/index.html";
    switch (pathname) {
        case '/index.html':
            document.getElementById("main").innerHTML = loadMainIndex();
            //document.getElementById("main").innerHTML = loadMainTest();
            break;
        case '/product.html':
            document.getElementById("main").innerHTML = loadMainProductList();
            break;
        
        default:
        //   console.log('default');            
            break;
    }
}
loadPage();