def first_fit_decreasing(available, required):
    sorted_required = sorted(required, reverse=True)
    bins = []
    waste = 0
    stock_used = 0

    for item in sorted_required:
        placed = False
        for bin in bins:
            if bin['remaining'] >= item:
                bin['cuts'].append(item)
                bin['remaining'] -= item
                placed = True
                break
        if not placed:
            new_bin = {
                'cuts': [item],
                'remaining': available - item
            }
            bins.append(new_bin)
            stock_used += 1

    waste = sum(bin['remaining'] for bin in bins)
    return {'cut_list': bins, 'waste': waste, 'stock_used': stock_used}
