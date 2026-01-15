# demo.py
from discounts import (
    Product,
    PercentageDiscount,
    FixedAmountDiscount,
    PremiumUserDiscount,
    DiscountEngine,
)

if __name__ == "__main__":
    product = Product("Wireless Mouse", 50.0)
    user_tier = "Premium"

    strategies = [
        PercentageDiscount(10),
        FixedAmountDiscount(5),
        PremiumUserDiscount(),
    ]

    engine = DiscountEngine(strategies)
    best_price = engine.calculate_best_price(product, user_tier)

    print(f"Best price for {product.name} ({user_tier} user): ${best_price:.2f}")
