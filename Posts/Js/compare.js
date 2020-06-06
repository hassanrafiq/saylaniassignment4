// JavaScript Document

function item1 (pro,img,p,t,c,h,pin,eer,col,type,smode,tmode)
{
	document.getElementById('p_1').innerHTML = pro;
	document.getElementById('image-one').style.backgroundImage = img;
	document.getElementById('price_1').innerHTML = p;
	document.getElementById('ton_1').innerHTML = t;
	document.getElementById('cooling_1').innerHTML = c;
	document.getElementById('heating_1').innerHTML = h;
	document.getElementById('power_1').innerHTML = pin;
	document.getElementById('eer_1').innerHTML = eer;
	document.getElementById('color_1').innerHTML = col;
	document.getElementById('type_1').innerHTML = type;
	document.getElementById('sleep_1').innerHTML = smode;
	document.getElementById('turbo_1').innerHTML = tmode;
}
function item2 (pro,img,p,t,c,h,pin,eer,col,type,smode,tmode)
{
	document.getElementById('p_2').innerHTML = pro;
	document.getElementById('image-two').style.backgroundImage = img
	document.getElementById('price_2').innerHTML = p
	document.getElementById('ton_2').innerHTML = t
	document.getElementById('cooling_2').innerHTML = c
	document.getElementById('heating_2').innerHTML = h
	document.getElementById('power_2').innerHTML = pin
	document.getElementById('eer_2').innerHTML = eer
	document.getElementById('color_2').innerHTML = col
	document.getElementById('type_2').innerHTML = type
	document.getElementById('sleep_2').innerHTML = smode
	document.getElementById('turbo_2').innerHTML = tmode
}

var AC = [
	//Haier Start here................................................................
	{
	Name: 'Simple Platform Storage Bed',
	img:"url(..Products/beds/Product/1.jpg)",
	price : '$575.00/-',
	},
	{
	Name: 'HSU-12LKE8C',
	img:"url(../Products/beds/Product1/1.jpg)",
	price : '37,000/-',		
	},
	{
	Name: 'HSU-12LKE10',
	img:"url(../Products/beds/Product2/1.jpg)",
	price : '37,500/-',
	},
	{
	Name: 'HSU-18LKE8A',
	img:"url(../images/HaierAC/HSU12LKE8A_HSU18LKE8A.jpg)",
	price : '46,000/-',
	},
	{
	Name: 'HSU-18LKE8C',
	img:"url(../images/HaierAC/HSU12LKE8C_HSU18LKE8C.jpg)",
	price : '46,000/-',
	},
	{
	Name: 'HSU-18LKE10',
	img:"url(../images/HaierAC/HSU12LKE10_HSU18LKE10.jpg)",
	price : '46,500/-',
	},
	{
	Name: 'HBU-18CA03',
	img:"url(../images/HaierAC/HBU24CA03_HBU18CA03_HBU48CH03.jpg)",
	price : '113,000/-',
	},
	{
	Name: 'HBU-24CA03',
	img:"url(../images/HaierAC/HBU24CA03_HBU18CA03_HBU48CH03.jpg)",
	price : '120,500/-',
	},
	{
	Name: 'HBU-48CH03',
	img:"url(../images/HaierAC/HBU24CA03_HBU18CA03_HBU48CH03.jpg)",
	price : '182,500/-',
	},
	{
	Name: 'HSU-12HQA-R2',
	img:"url(../images/HaierAC/HSU12HQAR2.jpg)",
	price : '66,000/-',
	},
	{
	Name: 'HSU-12HZE-R2',
	img:"url(../images/HaierAC/HSU12HZE_HSU18HZE.jpg)",
	price : '63,500/-',
	},
	{
	Name: 'HSU-18HZE-R2',
	img:"url(../images/HaierAC/HSU12HZE_HSU18HZE.jpg)",
	price : '85,500/-',
	},
	{
	Name: 'HDU-48CJ03-H',
	img:"url(../images/HaierAC/HDU48CJ03.jpg)",
	price : '175,000/-',
	},
	{
	Name: 'HPU-24C03E1',
	img:"url(../images/HaierAC/HPU50HN03.jpg)",
	price : '94,000/-',
	},
	{
	Name: 'HPU-24H03E1',
	img:"url(../images/HaierAC/HPU24C03E1_HPU24H03E1_HPU48CJ03.jpg)",
	price : '105,000/-',
	},
	{
	Name: 'HPU-48CJ03',
	img:"uurl(../images/HaierAC/HPU24C03E1_HPU24H03E1_HPU48CJ03.jpg)",
	price : '127,000/-',
	},
	{
	Name: 'HPU-50HN03',
	img:"url(../images/HaierAC/HPU50HN03.jpg)",
	price : '168,000/-',
	},
	{
	Name: 'HPU-60CA03',
	img:"url(../images/HaierAC/HPU60CA03.jpg)",
	price : '185,000/-',
	},
	{
	Name: 'HSU-12LXA03ZA',
	img:"url(../images/HaierAC/HSU12LXA03ZA.jpg)",
	price : '42,500/-',
	},
	{
	Name: 'HSU-18LXA03ZA',
	img:"url(../images/HaierAC/HSU18LXA03ZA.jpg)",
	price : '51,500/-',
	},
	{
	Name: 'HSU-12LEK-150V',
	img:"url(../images/HaierAC/HSU12LEK.jpg)",
	price : '42,500/-',
	},
	{
	Name: 'HSU-18LEK-150V',
	img:"url(../images/HaierAC/HSU12LEK.jpg)",
	price : '52,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	
	p_input : '1775 W',
	eer : '2.78',
	color : 'White',
	
	
	
	},
	{
	Name: 'HSU-12LEK-E1',
	img:"url(../images/HaierAC/HSU12LEKE1_HSU18LEKE1.jpg)",
	price : '35,500/-',
	
	
	
	p_input : '1320 W',
	eer : '2.58',
	color : 'White',
	
	
	
	},
	{
	Name: 'HSU-12LEK-E2',
	img:"url(../images/HaierAC/HSU12LEKE2_HSU18LEK%20E2.jpg)",
	price : '37,500/-',
	
	
	
	p_input : '1400 W',
	eer : '2.42',
	color : 'White',
	
	
	
	},
	{
	Name: 'HSU-12LEK-E3',
	img:"url(../images/HaierAC/HSU12LEKE3_HSU18LEK%20E3.jpg)",
	price : '35,500/-',
	
	
	
	p_input : '1400 W',
	eer : '2.42',
	color : 'White',
	
	
	
	},
	{
	Name: 'HSU-12LEK-E6',
	img:"url(../images/HaierAC/HSU12LEKE6_HSU18LEK%20E6.jpg)",
	price : '35,500/-',
	
	
	
	p_input : '1400 W',
	eer : '2.42',
	color : 'White',
	
	
	
	},
	{
	Name: 'HSU-18LEK-E1',
	img:"url(../images/HaierAC/HSU12LEKE1_HSU18LEKE1.jpg)",
	price : '44,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	
	p_input : '2000 W',
	eer : '2.45',
	color : 'White',
	
	
	
	},
	{
	Name: 'HSU-18LEK-E2',
	img:"url(../images/HaierAC/HSU12LEKE2_HSU18LEK%20E2.jpg)",
	price : '46,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	
	p_input : '2000 W',
	eer : '2.45',
	color : 'White',
	
	
	
	},
	{
	Name: 'HSU-18LEK-E3',
	img:"url(../images/HaierAC/HSU12LEKE3_HSU18LEK%20E3.jpg)",
	price : '44,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	
	p_input : '2000 W',
	eer : '2.45',
	color : 'White',
	
	
	
	},
	{
	Name: 'HSU-18LEK-E6',
	img:"url(../images/HaierAC/HSU12LEKE6_HSU18LEK%20E6.jpg)",
	price : '44,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	
	p_input : '1914 W',
	eer : '2.51',
	color : 'White',
	
	
	
	},
	{
	Name: 'HSU-24LEK-E1',
	img:"url(../images/HaierAC/HSU24LEK%20E1.jpg)",
	price : '60,500/-',
	ton : '2',
	c_capacity : '24000 BTU',
	
	p_input : '2500 W',
	eer : '2.6',
	color : 'White',
	
	
	
	},
	//Haier End here................................................................

	//Acson Start here................................................................
	{
	Name: 'ALC15C',
	img:"url(../images/AcsonAC/ALC15C.jpg)",
	price : '46,500/-',
	
	c_capacity : '18000 BTU',
	
	p_input : '/',
	eer : '2.93',
	color : 'Golden',
	
	s_mode : '/',
	
	},
	{
	Name: 'ALC18C',
	img:"url(../images/AcsonAC/ALC15C.jpg)",
	price : '61,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU / hr',
	
	p_input : '/',
	eer : '2.93',
	color : 'Golden',
	
	s_mode : '/',
	
	},
	{
	Name: 'ALC18CR',
	img:"url(../images/AcsonAC/ALC15C.jpg)",
	price : '72,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	
	p_input : '/',
	eer : '2.93',
	color : 'Golden',
	
	s_mode : '/',
	
	},
	{
	Name: 'ALC25C',
	img:"url(../images/AcsonAC/ALC15C.jpg)",
	price : '74,500/-',
	ton : '2',
	c_capacity : '24000 BTU',
	
	p_input : '/',
	eer : '/',
	color : 'Golden',
	
	s_mode : '/',
	
	},
	{
	Name: 'ALC25CR',
	img:"url(../images/AcsonAC/ALC15C.jpg)",
	price : '84,000/-',
	ton : '2',
	c_capacity : '24000 BTU',
	
	p_input : '/',
	eer : '/',
	color : 'Golden',
	
	s_mode : '/',
	
	},
	{
	Name: 'A5WMY15LR',
	img:"url(../images/AcsonAC/Inverter.jpg)",
	price : '83,000/-',
	
	c_capacity : '12,100 BTU',
	
	p_input : '/',
	eer : '/',
	color : 'White',
	
	s_mode : '/',
	
	},
	{
	Name: 'A5WMY18LR',
	img:"url(../images/AcsonAC/Inverter.jpg)",
	price : '125,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	
	p_input : '/',
	eer : '/',
	color : 'White',
	
	s_mode : '/',
	
	},
	//Acson End here................................................................
	
	//Mitsubishi Start here................................................................
	{
	Name: 'SRK13_CIK',
	img:"url(../images/MitsubishiAC/SRK.jpg)",
	price : '52,000/-',
	
	
	
	p_input : '/',
	eer : '/',
	color : 'White',
	
	s_mode : '/',
	
	},
	{
	Name: 'SRK20',
	img:"url(../images/MitsubishiAC/SRK.jpg)",
	price : '64,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	
	p_input : '/',
	eer : '/',
	color : 'White',
	
	s_mode : '/',
	
	},
	{
	Name: 'SRK25',
	img:"url(../images/MitsubishiAC/SRK.jpg)",
	price : '82,500/-',
	ton : '2',
	c_capacity : '24000 BTU',
	
	p_input : '/',
	eer : '/',
	color : 'White',
	
	s_mode : '/',
	
	},
	{
	Name: 'MS-13_VC',
	img:"url(../images/MitsubishiAC/MS13VC_HSU18LKE8A.jpg)",
	price : '51,500/-',
	
	
	
	p_input : '1220 W',
	eer : '9.7',
	color : 'White',
	
	s_mode : '/',
	
	},
	{
	Name: 'MS-18_VC',
	img:"url(../images/MitsubishiAC/MS13VC_HSU18LKE8A.jpg)",
	price : '63,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	
	p_input : '1220 W',
	eer : '9.5',
	color : 'White',
	
	s_mode : '/',
	
	},
	{
	Name: 'MS-24_VC',
	img:"url(../images/MitsubishiAC/MS24VC.jpg)",
	price : '82,000/-',
	ton : '2',
	c_capacity : '24000 BTU',
	
	p_input : '1220 W',
	eer : '9.5',
	color : 'White',
	
	s_mode : '/',
	
	},
	//Mitsubishi End here................................................................
	
	//Sharp Start here................................................................
	{
	Name: 'AH-AP18MMV',
	img:"url(../images/SharpAC/AP18MMV.jpg)",
	price : '59,500/-',
	ton : '1.5',
	c_capacity : '5.01 KW',
	
	p_input : '1740-1790 W',
	eer : '2.88',
	color : 'White',
	
	
	
	},
	{
	Name: 'AH-AP24MMV',
	img:"url(../images/SharpAC/AP18MMV.jpg)",
	price : '78,000/-',
	ton : '2',
	c_capacity : '6.70 KW',
	
	p_input : '2400-2500 W',
	eer : '2.79',
	color : 'White',
	
	
	
	},
	{
	Name: 'AH-XP10NRV',
	img:"url(../images/SharpAC/AHcXP13NRV.jpg)",
	price : '46,500/-',
	ton : '0.81',
	c_capacity : '2.8 kW',
	
	p_input : '890 W',
	eer : '3.15',
	color : 'White',
	
	
	
	},
	{
	Name: 'AH-XP13NRV',
	img:"url(../images/SharpAC/AHcXP13NRV.jpg)",
	price : '56,500/-',
	ton : '1.1',
	c_capacity : '3.4 kW',
	
	p_input : '1150 W',
	
	color : 'White',
	
	
	
	},
	{
	Name: 'AH-XP18MV',
	img:"url(../images/SharpAC/AP18MMV.jpg)",
	price : '88,000/-',
	ton : '1.5',
	c_capacity : '5.27 kW',
	
	p_input : '1440 W',
	eer : '3.66',
	color : 'White',
	
	
	
	},
	{
	Name: 'AH-XP24MV',
	img:"url(../images/SharpAC/AP18MMV.jpg)",
	price : '110,000/-',
	ton : '2',
	c_capacity : '6.25(1.70 - 7.10)kW',
	
	p_input : '1880 W',
	eer : '3.32',
	color : 'White',
	
	
	
	},
	//Sharp End here................................................................
	
	//LG Start here................................................................
	{
	Name: 'S126_DC',
	img:"url(../images/LGAC/S126DC.jpg)",
	price : '51,000/-',
	
	c_capacity : '/',
	
	p_input : '/',
	eer : '/',
	color : 'White',
	
	s_mode : '/',
	
	},
	{
	Name: 'S186_DC',
	img:"url(../images/LGAC/S126DC.jpg)",
	price : '68,000/-',
	ton : '1.5',
	c_capacity : '/',
	
	p_input : '/',
	eer : '/',
	color : 'White',
	
	s_mode : '/',
	
	},
	{
	Name: 'S246_DC',
	img:"url(../images/LGAC/S126DC.jpg)",
	price : '79,000/-',
	ton : '2',
	c_capacity : '/',
	
	p_input : '/',
	eer : '/',
	color : 'White',
	
	s_mode : '/',
	
	},
	//LG End here................................................................
	
	//PEL Start here................................................................
	{
	Name: '12KDM',
	img:"url(../images/PELAC/12KDM.jpg)",
	price : '39,500/-',
	
	
	
	p_input : '/',
	eer : '/',
	color : 'Black',
	
	s_mode : '/',
	
	},
	{
	Name: '18KDM',
	img:"url(../images/PELAC/12KDM.jpg)",
	price : '49,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	
	p_input : '/',
	eer : '/',
	color : 'Black',
	
	s_mode : '/',
	
	},
	{
	Name: '24KDM',
	img:"url(../images/PELAC/12KDM.jpg)",
	price : '65,500/-',
	ton : '2',
	c_capacity : '24000 BTU',
	
	p_input : '/',
	eer : '/',
	color : 'Black',
	
	s_mode : '/',
	
	},
	//PEL End here................................................................
	
	//Gree Start here................................................................
	{
	Name: '12C1TH2',
	img:"url(../images/GreeAC/12CITH2.jpg)",
	price : '64,000/-',
	
	
	
	p_input : '/',
	eer : '/',
	color : 'Black',
	
	
	
	},
	{
	Name: '18C1TH2',
	img:"url(../images/GreeAC/12CITH2.jpg)",
	price : '84,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	
	p_input : '/',
	eer : '/',
	color : 'Black',
	
	
	
	},
	{
	Name: '24C1TH2',
	img:"url(../images/GreeAC/12CITH2.jpg)",
	price : '105,000/-',
	ton : '2',
	c_capacity : '24000 BTU',
	
	p_input : '/',
	eer : '/',
	color : 'Black',
	
	
	
	},
	{
	Name: '12CZ9',
	img:"url(../images/GreeAC/12CZ9_18cz9_24CZ9.jpg)",
	price : '41,500/-',
	
	
	
	p_input : '/',
	eer : '/',
	color : 'Black',
	
	
	
	},
	{
	Name: '18CZ9',
	img:"url(../images/GreeAC/12CZ9_18cz9_24CZ9.jpg)",
	price : '51,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	
	p_input : '/',
	eer : '/',
	color : 'Black',
	
	
	
	},
	{
	Name: '24CZ9',
	img:"url(../images/GreeAC/12CZ9_18cz9_24CZ9.jpg)",
	price : '64,500/-',
	ton : '2',
	c_capacity : '24000 BTU',
	
	p_input : '/',
	eer : '/',
	color : 'Black',
	
	
	
	},
	{
	Name: 'GS-12CZ8A',
	img:"url(../images/GreeAC/CZ8.jpg)",
	price : '41,500/-',
	
	
	
	p_input : '/',
	eer : '/',
	color : 'Black',
	
	
	
	},
	{
	Name: 'GS-12CZ8W',
	img:"url(../images/GreeAC/CZ8.jpg)",
	price : '41,500/-',
	
	
	
	p_input : '/',
	eer : '/',
	color : 'Black',
	
	
	
	},
	{
	Name: 'GS-18CZ8W',
	img:"url(../images/GreeAC/CZ8.jpg)",
	price : '51,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	
	p_input : '/',
	eer : '/',
	color : 'Black',
	
	
	
	},
	{
	Name: 'GS-12CZ8S',
	img:"url(../images/GreeAC/CZ8.jpg)",
	price : '41,500/-',
	
	
	
	p_input : '/',
	eer : '/',
	color : 'Black',
	
	
	
	},
	{
	Name: 'GS-24CZ8S',
	img:"url(../images/GreeAC/CZ8.jpg)",
	price : '64,500/-',
	ton : '2',
	c_capacity : '24000 BTU',
	
	p_input : '/',
	eer : '/',
	color : 'Black',
	
	
	
	},
	//Gree End here................................................................
	
	//Kenwood Start here................................................................
	{
	Name: 'KEC-12S',
	img:"url(../images/KenWoodAC/Crystal.jpg)",
	price : '36,000/-',
	
	
	
	p_input : '/',
	eer : '/',
	
	
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'KEC-18S',
	img:"url(../images/KenWoodAC/Crystal.jpg)",
	price : '44,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	
	p_input : '/',
	eer : '/',
	
	
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'KEI-12S',
	img:"url(../images/KenWoodAC/Icon.jpg)",
	price : '36,000/-',
	
	
	
	p_input : '/',
	eer : '/',
	color : 'Silver',
	
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'KEI-18S',
	img:"url(../images/KenWoodAC/Icon.jpg)",
	price : '43,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	
	p_input : '/',
	eer : '/',
	color : 'Silver',
	
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'KED-24F',
	img:"url(../images/KenWoodAC/Sense_FS.jpg)",
	price : '81,500/-',
	ton : '2',
	c_capacity : '24000 BTU',
	
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Cabnet AC',
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'KEE-12S',
	img:"url(../images/KenWoodAC/Sense.jpg)",
	price : '35,000/-',
	
	
	
	p_input : '/',
	eer : '/',
	color : 'White',
	
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'KEE-18S',
	img:"url(../images/KenWoodAC/Sense.jpg)",
	price : '42,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	
	p_input : '/',
	eer : '/',
	color : 'White',
	
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'KEE-24S',
	img:"url(../images/KenWoodAC/Sense.jpg)",
	price : '50,000/-',
	ton : '2',
	c_capacity : '24000 BTU',
	
	p_input : '/',
	eer : '/',
	color : 'White',
	
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'KET-12S',
	img:"url(../images/KenWoodAC/Star.jpg)",
	price : '38,500/-',
	
	
	
	p_input : '/',
	eer : '/',
	color : 'White and Silver',
	
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'KET-18S',
	img:"url(../images/KenWoodAC/Star.jpg)",
	price : '48,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	
	p_input : '/',
	eer : '/',
	color : 'White and Silver',
	
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'KEV-12S',
	img:"url(../images/KenWoodAC/Viva.jpg)",
	price : '36,000/-',
	
	
	
	p_input : '/',
	eer : '/',
	color : 'Black',
	
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'KEV-18S',
	img:"url(../images/KenWoodAC/Viva.jpg)",
	price : '43,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	
	p_input : '/',
	eer : '/',
	color : 'Black',
	
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'KEV-24S',
	img:"url(../images/KenWoodAC/Viva.jpg)",
	price : '54,500/-',
	ton : '2',
	c_capacity : '24000 BTU',
	
	p_input : '/',
	eer : '/',
	color : 'Black',
	
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'KEV-41FH',
	img:"url(../images/KenWoodAC/Viva_FS.jpg)",
	price : '128,500/-',
	ton : '3.5',
	c_capacity : '36000 BTU',
	
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Cabnet AC',
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'KEV-41F',
	img:"url(../images/KenWoodAC/Viva_FS.jpg)",
	price : '121,500/-',
	ton : '3.5',
	c_capacity : '36000 BTU',
	
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Cabnet AC',
	s_mode : '/',
	t_mode : 'Yes'
	},
	//Kenwood End here................................................................
	
	//Orient Start here................................................................
	{
	Name: 'OF-24MS2',
	img:"url(../images/OrientAC/OF_48MS2.jpg)",
	price : '86,000/-',
	ton : '2',
	c_capacity : '24000 BTU',
	
	p_input : '2650 W',
	eer : '9.1-2.65',
	color : 'White',
	type : 'Cabnet AC',
	s_mode : '/',
	
	},
	{
	Name: 'OF-48MS2',
	img:"url(../images/OrientAC/OF_48MS2.jpg)",
	price : '134,000/-',
	ton : '4',
	c_capacity : '48000 BTU',
	
	p_input : '1500 W',
	eer : '9.4-2.75',
	color : 'White',
	type : 'Cabnet AC',
	s_mode : '/',
	
	},
	{
	Name: 'OSC-24-M4W',
	img:"url(../images/OrientAC/OSC48M4W4.jpg)",
	price : '96,000/-',
	ton : '2',
	c_capacity : '24000 BTU',
	
	p_input : '2600 W',
	eer : '12.1',
	color : 'White',
	type : 'Ceilling Cassette AC',
	s_mode : '/',
	
	},
	{
	Name: 'OSC-48-M4W',
	img:"url(../images/OrientAC/OSC48M4W4.jpg)",
	price : '177,000/-',
	ton : '4',
	c_capacity : '48000 BTU',
	
	p_input : '4800 W',
	eer : '8.3',
	color : 'White',
	type : 'Ceilling Cassette AC',
	s_mode : '/',
	
	},
	{
	Name: 'OS-19-MR16',
	img:"url(../images/OrientAC/OS19MR16.jpg)",
	price : '45,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	
	p_input : '1920 W',
	eer : '8.87',
	color : 'White',
	
	
	t_mode : 'Yes'
	},
	{
	Name: 'OS-19-MR27-HC',
	img:"url(../images/OrientAC/OS24MR27HC2.jpg)",
	price : '45,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	
	p_input : '1920 W',
	eer : '8.87',
	color : 'White',
	
	
	t_mode : 'Yes'
	},
	{
	Name: 'OS-24-MR27',
	img:"url(../images/OrientAC/OS24MR27HC2.jpg)",
	price : '65,000/-',
	ton : '2',
	c_capacity : '24000 BTU',
	
	p_input : '2700 W',
	eer : '8.87',
	color : 'White',
	
	
	t_mode : 'Yes'
	},
	{
	Name: 'Invertech-Series-1',
	img:"url(../images/OrientAC/Invertech.jpg)",
	price : '58,500/-',
	
	
	
	p_input : '/',
	eer : '/',
	color : 'Black',
	
	
	t_mode : 'Yes'
	},
	{
	Name: 'Invertech-Series-1.5',
	img:"url(../images/OrientAC/Invertech.jpg)",
	price : '80,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	
	p_input : '/',
	eer : '/',
	color : 'Black',
	
	
	t_mode : 'Yes'
	},
	{
	Name: 'Econotech-19MF08',
	img:"url(../images/OrientAC/Econotech.jpg)",
	price : '45,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	
	p_input : '/',
	eer : '/',
	color : 'White',
	
	
	t_mode : 'Yes'
	},
	{
	Name: 'Econotech-24MF08',
	img:"url(../images/OrientAC/Econotech.jpg)",
	price : '62,000/-',
	ton : '2',
	c_capacity : '24000 BTU',
	
	p_input : '/',
	eer : '/',
	color : 'White',
	
	
	t_mode : 'Yes'
	},
	{
	Name: 'Econotech-Series',
	img:"url(../images/OrientAC/Econotech.jpg)",
	price : '35,500/-',
	
	
	
	p_input : '/',
	eer : '/',
	color : 'White',
	
	
	t_mode : 'Yes'
	},
	//Orient End here................................................................
	
	//Samsung Start here................................................................
	{
	Name: 'AS-18VWA',
	img:"url(../images/SamsungAC/AS_18VWA.jpg)",
	price : '58,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	
	p_input : '1900 W',
	eer : '9.47',
	color : 'White',
	
	s_mode : '/',
	
	},
	{
	Name: 'AS-18FAXUMG',
	img:"url(../images/SamsungAC/AS_18FAXUMG.jpg)",
	price : '58,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	
	p_input : '/',
	eer : '/',
	color : 'White',
	
	
	t_mode : 'Yes'
	},
	{
	Name: 'AS-24FAXUMG',
	img:"url(../images/SamsungAC/AS_18FAXUMG.jpg)",
	price : '64,500/-',
	ton : '2',
	c_capacity : '24000 BTU',
	
	p_input : '2500 W',
	eer : '/',
	color : 'White',
	
	
	t_mode : 'Yes'
	},
	{
	Name: 'AR-18HPSDDWK/SG',
	img:"url(../images/SamsungAC/AR_18HPSDDWK.jpg)",
	price : '61,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	
	p_input : '/',
	eer : '/',
	color : 'White',
	
	
	t_mode : 'Yes'
	}
	//Samsung End here................................................................
	];

function compare(){
	var option_1= document.getElementById('option_1').value;
	var option_2= document.getElementById('option_2').value;
	for(var i =0 ;i<AC.length;i++)
	{
		if((option_1 == '------Select Product------' && option_2 == '------Select Product------') || (option_1 != '------Select Product------' && option_2 == '------Select Product------') || (option_1 == '------Select Product------' && option_2 != '------Select Product------'))
		{
			alert('Please select both products')
			break;
		}
		else if(option_1 == option_2)
		{
			alert('Cant compare same product')
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