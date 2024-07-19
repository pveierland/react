import React from 'react'
import {Pagination} from '../../src'
import figma from '@figma/code-connect'

/**
 * -- This file was auto-generated by `figma connect create` --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(Pagination, 'https://www.figma.com/design/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=34607-94621', {
  props: {
    showPages: figma.boolean('showPages'),
    pages: figma.nestedProps('Pages', {
      currentPage: figma.enum('CurrentPage', {
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
      }),
      pageCount: figma.enum('PageCount', {
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
      }),
    }),
  },
  example: ({showPages, pages}) => (
    <Pagination showPages={showPages} pageCount={pages.pageCount} currentPage={pages.currentPage} />
  ),
})