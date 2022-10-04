import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import CinemaHall from "@/components/views/CinemaHall.vue";
import rowLetter from "@/components/views/CinemaHall.vue";
import isSeatTaken from "@/components/views/CinemaHall.vue"


const createComponent = () =>
  shallowMount(CinemaHall, {
    props: { rows, seats, seatsTaken },
  });

const rows = 10;
const seats = 10;
const seatsTaken = ['A1'];

describe("CinemaHall.vue", () => {
  it("expects to be mounted", () => {
    const wrapper = createComponent();
    expect(wrapper).toBeTruthy();
  });

  it("should display a given seats number in a row", () => {
    const wrapper = createComponent();
    expect(wrapper.findAll('.cinema-hall__row').length).toBe(seats)
  });

  it("should display a given number of rows", () => {
    const wrapper = createComponent();
    expect(wrapper.findAll('[data-spec="row"]').length).toBe(rows)
  });

  it("should generate letters for rows numbers", () => {
    const wrapper = shallowMount(rowLetter)
    expect(wrapper.vm.rowLetter(3)).toBe('C')
  })

  it("should recognize if a given seat is taken", () => {
    const wrapper = shallowMount(isSeatTaken, {
      propsData: {
        seatsTaken: ['A1', 'A2'],
      }
    });
    expect(wrapper.vm.isSeatTaken('A7')).toBe(false)
  })

  it("shoudl emit a custom event seats-selected", async () => {
    const wrapper = createComponent();
    wrapper.vm.$emit("seats-selected")
    wrapper.vm.$emit("seats-selected", 'C7')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('seats-selected')).toBeTruthy()
  })
})
