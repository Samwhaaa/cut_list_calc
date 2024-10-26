def worst_fit(available, required):
    sorted_required = sorted(required, reverse=True)
    bins = []
    waste = 0
    stock_used = 0

    for item in sorted_required:
        worst_bin = None
        max_space_left = 0

        for bin in bins:
            if bin['remaining'] >= item and bin['remaining'] > max_space_left:
                worst_bin = bin
                max_space_left = bin['remaining']

        if worst_bin is not None:
            worst_bin['cuts'].append(item)
            worst_bin['remaining'] -= item
        else:
            new_bin = {
                'cuts': [item],
                'remaining': available - item
            }
            bins.append(new_bin)
            stock_used += 1

    waste = sum(bin['remaining'] for bin in bins)
    return {'cut_list': bins, 'waste': waste, 'stock_used': stock_used}
