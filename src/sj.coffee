$(document).ready(->
	for i in [0..11]
		$("#char-" + i).css("opacity", 0.3)
	for i in [0..2]
		$("#info-" + i).css("opacity", 0.3)
)

recalc = (elem, e) ->
	d = Math.abs(elem.offset().left + elem.width() / 2 - e.clientX)
	dmax = 100
	elem.css("opacity", if d > dmax then 0.3 else (-0.7 / dmax) * d + 1)
	
document.onmousemove = (e) ->
	for i in [0..11]
		recalc($("#char-" + i), e)
	for i in [0..2]
		recalc($("#info-" + i), e)