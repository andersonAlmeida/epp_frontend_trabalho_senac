export default {
	items: [
		{
			name: 'Atrações',
			url: '/atracoes',
			icon: 'icon-location-pin',
			children: [
				{
					name: 'Listar',
					url: '/atracoes',
					icon: 'icon-list'
				},				
				{
					name: 'Nova',
					url: '/atracoes/novo',
					icon: 'icon-note'
				}				
			]
		},
		{
			name: 'Categorias',
			url: '/categorias',
			icon: 'cui-tags',
			children:[
				{
					name: 'Listar',
					url: '/categorias',
					icon: 'icon-list'
				},
				{
					name: 'Nova',
					url: '/categorias/novo',
					icon: 'icon-note'
				}
			]
		},
	]
}
