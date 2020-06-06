// JavaScript Document

function item1 (pro,img,p,t,c,h,pin,eer,col,type,smode,tmode)
{
	document.getElementById('p_1').innerHTML = pro;
	document.getElementById('image-one').style.backgroundImage = img;
	document.getElementById('price_1').innerHTML = p;
	document.getElementById('ton_1').innerHTML = t;
	document.getElementById('cooling_1').innerHTML = c;
	document.getElementById('heating_1').innerHTML = h;
	
	
}
function item2 (pro,img,p,t,c,h,pin,eer,col,type,smode,tmode)
{
	document.getElementById('p_2').innerHTML = pro;
	document.getElementById('image-two').style.backgroundImage = img
	document.getElementById('price_2').innerHTML = p
	document.getElementById('ton_2').innerHTML = t
	document.getElementById('cooling_2').innerHTML = c
	document.getElementById('heating_2').innerHTML = h
	
	
}

var AC = [
	//Beds Start here................................................................
	{
	Name: 'Simple Platform Storage Bed',
	img:"url(Products/Beds/Product/1.jpg)",
	price : '$575.00/-',
	ton : 'out of stock',
	c_capacity : '6 ft x 6.5 ft',
	h_capacity : 'Mercury Row',
	},
	{
	Name: 'Riva Storage Bed',
	img:"url(Products/Beds/Product1/1.jpg)",
	price : '$845.00/-',
	ton : '6',
	c_capacity : '78"W x 84"D x 44"H',
	h_capacity : 'Lark Manor',
	},
	{
	Name: 'Nevis Platform Storage',
	img:"url(Products/Beds/Product2/1.jpg)",
	price : '$875.00/-',
	ton : '12',
	c_capacity : '78"W x 85"D x 41"H',
	h_capacity : 'Andover Mills',
	},
	{
	Name: 'City II Rake Storage',
	img:"url(Products/Beds/Product3/1.jpg)",
	price : '$895.00/-',
	ton : '1',
	c_capacity : '80"W x 88"D x 55"H',
	h_capacity : 'Mercury Row',
	},
	{
	Name: 'Nevis Low Profile Storage Bed',
	img:"url(Products/Beds/Product4/1.jpg)",
	price : '$925.00/-',
	ton : '3',
	c_capacity : '79"W x 91"D x 50"H ',
	h_capacity : 'Lark Manor',
	},
	{
	Name: 'Veneto Platform Bed',
	img:"url(Products/Beds/Product5/1.jpg)",
	price : '$695.00/-',
	ton : '9',
	c_capacity : '85"W x 89"D x 44"H',
	h_capacity : 'Andover Mills',
	},
	{
	Name: 'Felisa Upholste#D70F64 Panel Bed',
	img:"url(Products/Beds/Product6/1.jpg)",
	price : '$313.99/-',
	ton : '7',
	c_capacity : '80"W x 88"D x 55"H',
	h_capacity : 'Mercury Row',
	},
	{
	Name: 'Upholste#D70F64 Platform Bed',
	img:"url(Products/Beds/Product7/1.jpg)",
	price : '$153.99/-',
	ton : '4',
	c_capacity : '/',
	h_capacity : 'Lark Manor',
	},
	{
	Name: 'Felisa Queen Upholste#D70F64',
	img:"url(Products/Beds/Product8/1.jpg)",
	price : '$578.45/-',
	ton : '6',
	c_capacity : '79"W x 91"D x 50"H',
	h_capacity : 'Andover Mills',
	},

	//Beds End here................................................................

	
	//Chairs Start here................................................................
	{
	Name: 'High-Back Executive Chair',
	img:"url(Products/Chairs/Product/1.jpg)",
	price : '$94.99/-',
	ton : '21',
	c_capacity : 'Andover Mills',
	h_capacity : '/',
	},
	{
	Name: 'Cruz Mid-Back Leather Desk Chair',
	img:"url(Products/Chairs/Product1/1.jpg)",
	price : '$159.99/-',
	ton : '11',
	c_capacity : 'Mercury Row',
	h_capacity : '/',
	},
	{
	Name: 'High-Back Chair',
	img:"url(Products/Chairs/Product2/1.jpg)",
	price : '$171.99/-',
	ton : '9',
	c_capacity : 'Lark Manor',
	h_capacity : '/',
	},
	{
	Name: 'Heated Massaging High-Back Executive Chair',
	img:"url(Products/Chairs/Product3/1.jpg)",
	price : '$176.99/-',
	ton : '4',
	c_capacity : 'Andover Mills',
	h_capacity : '/',
	},
	{
	Name: 'Side Chair',
	img:"url(Products/Chairs/Product4/1.jpg)",
	price : '$189.99/-',
	ton : '7',
	c_capacity : 'Mercury Row',
	h_capacity : '/',
	},
	{
	Name: 'Lanesboro Side Chair',
	img:"url(Products/Chairs/Product5/1.jpg)",
	price : '$181.98/-',
	ton : '2',
	c_capacity : 'Lark Manor',
	h_capacity : '/',
	},
	{
	Name: 'Sally Cross Back Side Chair',
	img:"url(Products/Chairs/Product6/1.jpg)",
	price : '$77.99/-',
	ton : '8',
	c_capacity : 'Andover Mills',
	h_capacity : '/',
	},
	{
	Name: 'Charlotte Arrowback Side',
	img:"url(Products/Chairs/Product7/1.jpg)",
	price : '$110.99/-',
	ton : 'Out of Stock',
	c_capacity : 'Mercury Row',
	h_capacity : '/',
	},
	{
	Name: 'Cameron Side Chair',
	img:"url(Products/Chairs/Product8/1.jpg)",
	price : '$141.99/-',
	ton : 'Out of Stock',
	c_capacity : 'Lark Manor',
	h_capacity : '/',
	},

	//Chairs End here................................................................
	
//Tables Start here................................................................
	{
	Name: 'Etagere Plant Stand',
	img:"url(Products/Tables/Product/1.jpg)",
	price : '$86.99/-',
	ton : '3',
	h_capacity : 'Lark Manor',
	},
	{
	Name: 'Jordan Accent Table',
	img:"url(Products/Tables/Product1/1.jpg)",
	price : '$70.99/-',
	ton : '1',
	c_capacity : 'Mercury Row',
	},
	{
	Name: 'Zahara Pedestal Plant Stand',
	img:"url(Products/Tables/Product2/1.jpg)",
	price : '$109.99/-',
	ton : '7',
	c_capacity : 'Andover Mills',
	},
	{
	Name: 'Natalie Extendable Dining Table',
	img:"url(Products/Tables/Product3/1.jpg)",
	price : '$97.99/-',
	ton : '1',
	c_capacity : 'Lark Manor',
	},
	{
	Name: 'Decatur 1 Drawer End Table',
	img:"url(Products/Tables/Product4/1.jpg)",
	price : '$80.99/-',
	ton : '3',
	c_capacity : 'Mercury Row',
	},
	{
	Name: 'Robbinston End Table',
	img:"url(Products/Tables/Product5/1.jpg)",
	price : '$88.35/-',
	ton : '6',
	c_capacity : 'Andover Mills',
	},
	{
	Name: 'Dempsey Chairside Table',
	img:"url(Products/Tables/Product6/1.jpg)",
	price : '$89.22/-',
	ton : '5',
	c_capacity : 'Lark Manor',
	},
	{
	Name: 'Canterbury End Table',
	img:"url(Products/Tables/Product7/1.jpg)",
	price : '$142.00/-',
	ton : '2',
	c_capacity : 'Mercury Row',
	},
	{
	Name: 'Lexington Chairside Table',
	img:"url(Products/Tables/Product8/1.jpg)",
	price : '$103.01/-',
	ton : '4',
	c_capacity : 'Andover Mills',
	},

	//Tables End here................................................................
	
	
	//Sofas Start here................................................................
	{
	Name: 'Serta Upholstery Aries',
	img:"url(Products/Sofas/Product/1.jpg)",
	price : '$408.99/-',
	ton : '9',
	c_capacity : 'Andover Mills',
	h_capacity : '/',
	},
	{
	Name: 'Athena Convertible Sleeper',
	img:"url(Products/Sofas/Product1/1.jpg)",
	price : '$438.00/-',
	ton : 'Out of Stock',
	c_capacity : 'Lark Manor',
	h_capacity : '/',
	},
	{
	Name: 'Serta Upholstery Aries Loveseat',
	img:"url(Products/Sofas/Product2/1.jpg)",
	price : '$499.99/-',
	ton : '1',
	c_capacity : 'Mercury Row',
	h_capacity : '/',
	},
	{
	Name: 'Serta Upholstery Aries Arm',
	img:"url(Products/Sofas/Product3/1.jpg)",
	price : '$329.99/-',
	ton : '3',
	c_capacity : 'Lark Manor',
	h_capacity : '/',
	},
	{
	Name: 'Morpheus Sofa Sectional',
	img:"url(Products/Sofas/Product4/1.jpg)",
	price : '$508.99/-',
	ton : '9',
	c_capacity : 'Andover Mills',
	h_capacity : '/',
	},
	{
	Name: 'Azaleh 4 Piece Sectional Seating',
	img:"url(Products/Sofas/Product5/1.jpg)",
	price : '$718.00/-',
	ton : '6',
	c_capacity : 'Lark Manor',
	h_capacity : '/',
	},
	{
	Name: 'Fennia 5 Piece Seating',
	img:"url(Products/Sofas/Product6/1.jpg)",
	price : '$729.99/-',
	ton : '3',
	c_capacity : 'Andover Mills',
	h_capacity : '/',
	},
	{
	Name: 'Serta Upholstery',
	img:"url(Products/Sofas/Product7/1.jpg)",
	price : '$499.99/-',
	ton : '8',
	c_capacity : 'Mercury Row',
	h_capacity : '/',
	},
	{
	Name: 'Cullen Loveseat',
	img:"url(Products/Sofas/Product8/1.jpg)",
	price : '$474.99/-',
	ton : '16',
	c_capacity : 'Lark Manor',
	h_capacity : '/',
	},

	//Sofas End here................................................................
	
	
	
	];

function compare(){
	var option_1= document.getElementById('option_1').value;
	var option_2= document.getElementById('option_2').value;
	for(var i =0 ;i<AC.length;i++)
	{
		if((option_1 == '------Select Product------' && option_2 == '------Select Product------') || (option_1 != '------Select Product------' && option_2 == '------Select Product------') || (option_1 == '------Select Product------' && option_2 != '------Select Product------'))
		{
			alert('Please select both Products')
			break;
		}
		else if(option_1 == option_2)
		{
			alert('Cannot compare same Products')
			item1("","","","","","","","","","","");
			item2("","","","","","","","","","","");
			break;
		}
		else if(option_1 == AC[i].Name)
		{
			item1(AC[i].Name,AC[i].img,AC[i].price,AC[i].ton,AC[i].c_capacity,AC[i].h_capacity,AC[i].p_input,AC[i].eer,AC[i].color,AC[i].type,AC[i].s_mode,AC[i].t_mode);
			document.getElementById('image-one').style.opacity = '1'
		}
		
		else if(option_2 == AC[i].Name)
		{
			item2(AC[i].Name,AC[i].img,AC[i].price,AC[i].ton,AC[i].c_capacity,AC[i].h_capacity,AC[i].p_input,AC[i].eer,AC[i].color,AC[i].type,AC[i].s_mode,AC[i].t_mode);
			document.getElementById('image-two').style.opacity = '1'
		}
	}

}