'use client'

import { useState } from 'react'
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { MoreHorizontal, ChevronDown, UserPlus, Download } from 'lucide-react'

// Mock user data
export type User = {
  id: string
  name: string
  email: string
  role: 'USER' | 'ADMIN'
  status: 'active' | 'inactive' | 'suspended'
  coursesEnrolled: number
  lastActive: string
  joinDate: string
}

const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'USER',
    status: 'active',
    coursesEnrolled: 5,
    lastActive: '2 hours ago',
    joinDate: '2024-01-15',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'USER',
    status: 'active',
    coursesEnrolled: 8,
    lastActive: '1 day ago',
    joinDate: '2024-02-20',
  },
  {
    id: '3',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'ADMIN',
    status: 'active',
    coursesEnrolled: 0,
    lastActive: '30 minutes ago',
    joinDate: '2023-12-01',
  },
  // Add more mock users as needed
]

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: 'User',
    cell: ({ row }) => {
      const user = row.original
      return (
        <div className="flex items-center space-x-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={`/avatars/${user.id}.png`} />
            <AvatarFallback className="bg-slate-700 text-slate-50">
              {user.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium text-slate-50">{user.name}</div>
            <div className="text-sm text-slate-400">{user.email}</div>
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }) => {
      const role = row.getValue('role') as string
      return (
        <Badge
          className={role === 'ADMIN' ? 'bg-purple-500 text-white' : 'bg-blue-500 text-white'}
        >
          {role}
        </Badge>
      )
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string
      return (
        <Badge
          className={
            status === 'active' ? 'bg-green-500 text-white' :
              status === 'inactive' ? 'bg-gray-500 text-white' :
                'bg-red-500 text-white'
          }
        >
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: 'coursesEnrolled',
    header: 'Courses',
    cell: ({ row }) => (
      <div className="text-slate-50">{row.getValue('coursesEnrolled')}</div>
    ),
  },
  {
    accessorKey: 'lastActive',
    header: 'Last Active',
    cell: ({ row }) => (
      <div className="text-slate-400">{row.getValue('lastActive')}</div>
    ),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 text-slate-400 hover:text-slate-50">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-slate-800 border-slate-700">
            <DropdownMenuCheckboxItem className="text-slate-300 hover:bg-slate-700">
              View Profile
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="text-slate-300 hover:bg-slate-700">
              Edit User
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="text-slate-300 hover:bg-slate-700">
              Reset Password
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="text-red-400 hover:bg-slate-700">
              Suspend User
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function UserManagement() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data: mockUsers,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full space-y-4">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Filter users..."
            value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
            onChange={(event) =>
              table.getColumn('name')?.setFilterValue(event.target.value)
            }
            className="max-w-sm bg-slate-800 border-slate-700 text-slate-50 placeholder:text-slate-400"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-slate-800 border-slate-700 text-slate-50 hover:bg-slate-700">
                Columns <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-slate-800 border-slate-700">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize text-slate-300 hover:bg-slate-700"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center space-x-2">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <UserPlus className="mr-2 h-4 w-4" />
            Add User
          </Button>
          <Button variant="outline" className="bg-slate-800 border-slate-700 text-slate-50 hover:bg-slate-700">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Data Table */}
      <div className="rounded-md border border-slate-700 bg-slate-800/50">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-slate-700 hover:bg-slate-800">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-slate-300">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="border-slate-700 hover:bg-slate-800"
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-slate-400"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between space-x-2 py-4">
        <div className="flex-1 text-sm text-slate-400">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="bg-slate-800 border-slate-700 text-slate-50 hover:bg-slate-700"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="bg-slate-800 border-slate-700 text-slate-50 hover:bg-slate-700"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
