function switchto(elem)
{
	document.getElementById('about').style.display
		= document.getElementById('twitter').style.display  
		= document.getElementById('blog').style.display  
		= document.getElementById('workhistory').style.display = 'none';
	
	document.getElementById(elem).style.display = 'inline';

	if (elem == 'about')
	{
		triangle_margin = '10px 476px 0 0';
	}
	else if (elem == 'twitter')
	{
		triangle_margin = '10px 44px 0 0';
	}
	else if (elem == 'workhistory')
	{
		triangle_margin = '10px 327px 0 0';
	}
	else if(elem == 'blog')
	{
		triangle_margin = '10px 154px 0 0';
	}
	else
	{
		triangle_margin = '10px 476px 0 0';
	}

	document.getElementById('triangle').style.margin = triangle_margin;
	$( ".accordion" ).accordion("refresh");
}
