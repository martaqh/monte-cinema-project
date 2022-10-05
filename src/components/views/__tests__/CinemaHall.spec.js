import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import CinemaHall from "@/components/views/CinemaHall.vue";


const createComponent = () =>
  shallowMount(CinemaHall, {
    props: { rows, seats, seatsTaken },
  });

const rows = 10;
const seats = 26;
const seatsTaken = ['A1', 'A2', 'A3'];

describe("CinemaHall.vue", () => {

  it("should display a given number of rows", () => {
    const wrapper = createComponent();
    expect(wrapper.findAll('[data-spec="row"]').length).toBe(rows)
  });

  it("should display a given total number of seats", () => {
    const wrapper = createComponent();
    expect(wrapper.findAll('[data-spec="seat"]').length).toBe(seats * rows)
  });

  it("should display a given number of seats in a row", () => {
    const wrapper = createComponent();
    expect(wrapper.findAll('[row-letter="B"]').length).toBe(seats)
  });

  it("should display row letters", () => {
    const wrapper = createComponent()
    expect(wrapper.findAll('[data-spec="letter"]').at(3).text()).toMatch('D')
  })

  it("seats taken should be displayed as such", () => {
    const wrapper = createComponent();
    const seat = wrapper.findAll('[data-spec="seat"]').at(2)
    expect(seat.attributes('taken')).toBe('true')
  });

  it("shoudl emit a custom event seats-selected", async () => {
    const wrapper = createComponent()
    wrapper.findAll('[data-spec="seat"]').at(26).trigger('click')
    wrapper.findAll('[data-spec="seat"]').at(27).trigger('click')
    const event = wrapper.emitted('seats-selected')
    expect(event).toBeTruthy()
    expect(event[0]).toEqual([
      {
        seatsSelected: ['B1', 'B2']
      }])
  })
})
