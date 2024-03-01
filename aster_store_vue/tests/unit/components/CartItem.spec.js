import { shallowMount } from '@vue/test-utils'
import CartItem from '@/components/CartItem.vue'

describe('CartItem.vue', () => {
        it('snapshort', () => {
            const wrapper = shallowMount(CartItem)
            expect(wrapper).toMatchSnapshot()
        })
    })