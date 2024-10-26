def next_fit(available, required):
    sorted_required = sorted(required, reverse=True)
    bins = []
    waste = 0
    stock_used = 0
    current_bin = None

    for item in sorted_required:
        if current_bin is None or current_bin['remaining'] < item:
            current_bin = {
                'cuts': [item],
                'remaining': available - item
            }
            bins.append(current_bin)
            stock_used += 1
        else:
            current_bin['cuts'].append(item)
            current_bin['remaining'] -= item

    waste = sum(bin['remaining'] for bin in bins)
    return {'cut_list': bins, 'waste': waste, 'stock_used': stock_used}
