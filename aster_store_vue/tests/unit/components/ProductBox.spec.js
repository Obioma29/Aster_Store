import { shallowMount } from '@vue/test-utils'
import ProductBox from '@/components/ProductBox.vue'

describe('ProductBox.vue', () => {
        it('snapshort', () => {
            const wrapper = shallowMount(ProductBox)
            expect(wrapper).toMatchSnapshot()
        })
    })