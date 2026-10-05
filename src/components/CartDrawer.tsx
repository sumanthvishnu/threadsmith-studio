import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { formatINR } from '@/data/products';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export function CartDrawer({ open, onClose, onCheckout }: CartDrawerProps) {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader className="space-y-2.5 pb-4">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Waitlist Cart ({totalItems} items)
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <ShoppingBag className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Your cart is empty</h3>
            <p className="text-gray-500 max-w-xs">
              Nothing selected yet. Browse the first drop and add the tees you
              would want when we open.
            </p>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-6">
                {items.map((item, index) => (
                  <div key={`${item.product.id}-${item.size}-${item.color}`}>
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="w-20 h-20 rounded-lg overflow-hidden bg-neutral-950 flex-shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {item.color} / {item.size}
                        </p>
                        <p className="font-semibold text-gray-900 mt-1">
                          {formatINR(item.product.price)}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center border rounded-md">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.size,
                                  item.color,
                                  item.quantity - 1
                                )
                              }
                              className="p-1 hover:bg-gray-100 transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.size,
                                  item.color,
                                  item.quantity + 1
                                )
                              }
                              className="p-1 hover:bg-gray-100 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          <button
                            onClick={() =>
                              removeFromCart(item.product.id, item.size, item.color)
                            }
                            className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    {index < items.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Footer */}
            <div className="border-t pt-4 mt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Estimated total</span>
                <span className="text-xl font-bold text-gray-900">
                  {formatINR(totalPrice)}
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Payments are not live yet. Continue to join the waitlist with
                this selection. No money is taken today.
              </p>
              <Button
                className="w-full bg-neutral-900 hover:bg-neutral-800"
                size="lg"
                onClick={onCheckout}
              >
                Continue to waitlist
              </Button>
              <Button variant="outline" className="w-full" onClick={onClose}>
                Keep browsing
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
