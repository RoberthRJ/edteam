<template>
	<!-- Main Sidebar Container -->
	<aside class="main-sidebar sidebar-dark-primary elevation-4">
		<!-- Brand Logo -->
		<router-link to="/" class="brand-link">
			<img src="/asset/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
			style="opacity: .8">
			<span class="brand-text font-weight-light">AULA VIRTUAL</span>
		</router-link>
		<!-- Sidebar -->
		<div class="sidebar">
			<!-- Sidebar user panel (optional) -->
			<div class="user-panel mt-3 pb-3 mb-3 d-flex">
				<div class="image">
					<img src="/asset/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
				</div>
				<div class="info">
					<a href="#" class="d-block">Pepelucho</a>
				</div>
			</div>
			<!-- Sidebar Menu -->
			<nav class="mt-2">
				<ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
					<!-- Add icons to the links using the .nav-icon class
					with font-awesome or any other icon font library -->
					<li class="nav-item">
						<a href="./index%20modificado.html" class="nav-link active">
							<i class="nav-icon fas fa-tachometer-alt"></i>
							<p>Tablero</p>
						</a>
					</li>
					<li class="nav-item">
						<a href="pages/widgets.html" class="nav-link">
							<i class="nav-icon fas fa-graduation-cap"></i>
							<p>
								Grado
							</p>
						</a>
					</li>
					<li class="nav-item has-treeview">
						<a href="#" class="nav-link">
							<i class="nav-icon fas fa-chalkboard-teacher"></i>
							<p>
								Profesores
							</p>
						</a>
					</li>
					<li class="nav-item has-treeview">
						<a href="#" class="nav-link">
							<i class="nav-icon fas fa-user-graduate"></i>
							<p>
								Estudiantes
							</p>
						</a>
					</li>
					<li class="nav-item has-treeview">
						<a href="#" class="nav-link">
							<i class="nav-icon fas fa-users"></i>
							<p>
								Apoderados
							</p>
						</a>
					</li>
					<li class="nav-item has-treeview">
						<a href="#" class="nav-link">
							<i class="nav-icon fas fa-user-tie"></i>
							<p>
								Administrativos
							</p>
						</a>
					</li>
					<li class="nav-item has-treeview">
						<a href="#" class="nav-link">
							<i class="nav-icon fas fa-scroll"></i>
							<p>
								Periodos
								<i class="fas fa-angle-left right"></i>
							</p>
						</a>
					</li>
					<li class="nav-item">
						<a href="pages/calendar.html" class="nav-link">
							<i class="nav-icon far fa-calendar-alt"></i>
							<p>
								Calendario
							</p>
						</a>
					</li>
					<li class="nav-item has-treeview">
						<a href="#" class="nav-link">
							<i class="nav-icon far fa-envelope"></i>
							<p>
								Buzón
								<i class="fas fa-angle-left right"></i>
							</p>
						</a>
						<ul class="nav nav-treeview">
							<li class="nav-item">
								<a href="pages/mailbox/mailbox.html" class="nav-link">
									<i class="far fa-circle nav-icon"></i>
									<p>Inbox</p>
								</a>
							</li>
							<li class="nav-item">
								<a href="pages/mailbox/compose.html" class="nav-link">
									<i class="far fa-circle nav-icon"></i>
									<p>Compose</p>
								</a>
							</li>
							<li class="nav-item">
								<a href="pages/mailbox/read-mail.html" class="nav-link">
									<i class="far fa-circle nav-icon"></i>
									<p>Read</p>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
			<!-- /.sidebar-menu -->
		</div>
		<!-- /.sidebar -->
	</aside>
</template>