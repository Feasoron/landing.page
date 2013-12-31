function switchto(elem)
{
	document.getElementById('about').style.display = document.getElementById('twitter').style.display  = document.getElementById('workhistory').style.display = 'none';
	document.getElementById(elem).style.display = 'inline';
	if (elem == 'about')
	{
		triangle_margin = '10px 205px 0 0';
	}
	else if (elem == 'twitter')
	{
		triangle_margin = '10px 531px 0 0';
	}
	else if (elem == 'workhistory')
	{
		triangle_margin = '10px 54px 0 0';
	}
	else
	{
		triangle_margin = '10px 54px 0 0';
	}
	document.getElementById('triangle').style.margin = triangle_margin;
}