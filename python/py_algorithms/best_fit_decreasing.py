def best_fit_decreasing(available, required):
    sorted_required = sorted(required, reverse=True)
    bins = []
    waste = 0
    stock_used = 0

    for item in sorted_required:
        best_bin = None
        min_space_left = available

        for bin in bins:
            if bin['remaining'] >= item and bin['remaining'] - item < min_space_left:
                best_bin = bin
                min_space_left = bin['remaining'] - item

        if best_bin is not None:
            best_bin['cuts'].append(item)
            best_bin['remaining'] -= item
        else:
            new_bin = {
                'cuts': [item],
                'remaining': available - item
            }
            bins.append(new_bin)
            stock_used += 1

    waste = sum(bin['remaining'] for bin in bins)
    return {'cut_list': bins, 'waste': waste, 'stock_used': stock_used}
