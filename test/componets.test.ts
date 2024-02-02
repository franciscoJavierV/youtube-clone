import { mount } from '@vue/test-utils';
import FeedPage from '../pages/feed/index.vue';
import LoginPage from '../pages/login.vue';
import MyListItem from '../components/Video-cart.vue';

describe('text video cart', () => {
    test('tempate imports as expected', async ()=> {
        const videoCartComponent = await import('../components/Video-cart.vue')
        expect(videoCartComponent).toBeDefined()
    })
    test("mount component", async () => {
        expect(MyListItem).toBeTruthy();
      
        const wrapper = mount(MyListItem, {
          props: {
            item: {
                snippet: {
                  thumbnails: {
                    default: {
                      url: 'https://example.com/thumbnail.jpg',
                    },
                  },
                  title: 'Test Title',
                  description: 'Test Description',
                  channelTitle: 'Test Channel',
                },
              }
          },
        });
        expect(wrapper.html()).toContain("Test Title") ;
      });
      test("mount component with chanel name", async () => {
        expect(MyListItem).toBeTruthy();
      
        const wrapper = mount(MyListItem, {
          props: {
            item: {
                snippet: {
                  thumbnails: {
                    default: {
                      url: 'https://example.com/thumbnail.jpg',
                    },
                  },
                  title: 'Test Title',
                  description: 'Test Description',
                  channelTitle: 'Test Channel',
                },
              }
          },
        });
        expect(wrapper.html()).toContain("Test Description") ;
      });

      test("mount page feed", async () => {
        expect(FeedPage).toBeTruthy();
      
        const wrapper = mount(FeedPage, {
          props: {
            itemList: {
                snippet: {
                  thumbnails: {
                    default: {
                      url: 'https://example.com/thumbnail.jpg',
                    },
                  },
                  title: 'Test Title',
                  description: 'Test Description',
                  channelTitle: 'Test Channel',
                },
              },
              title: "Test title for list"
          },
        });
        expect(wrapper.html()).toBeDefined() ;
      });
      test("mount page login", async () => {
        expect(LoginPage).toBeTruthy();
      
      });


})