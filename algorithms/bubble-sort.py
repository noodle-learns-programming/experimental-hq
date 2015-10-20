#http://stackoverflow.com/questions/895371/bubble-sort-homework
#http://stackoverflow.com/questions/276113/what-is-a-bubble-sort-good-for?rq=1
arrData = [1, 3, 5, 7, 19, 2, 4]
length 	= len(arrData) - 1
sorted  = False
while not sorted:
	sorted = True
	for element in range(0, length):
		if arrData[element] > arrData[element + 1]:
			sorted 	= False
			temp 	= arrData[element]
			arrData[element] = arrData[element + 1]
			arrData[element + 1] = temp

print arrData