def recurring_character(str_val):
  for index, c in enumerate(str_val):
    print(str_val[:index+1])
    if str_val[:index+1].count(c) > 1:
      return c 
  return 'None'

print(recurring_character('CABDBA'))