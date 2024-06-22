export const columns = [
  {
    header: "No",
    accessorFn: (originalRow, index) => index + 1,
  },
  {
    header: "Nama Lengkap",
    accessorKey: "fullname",
  },
  {
    header: "Username",
    accessorKey: "username",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Asal Sekolah",
    accessorKey: "from_school",
  },
  {
    header: "Nilai",
    accessorKey: "nilai",
  },
  {
    header: "Grade",
    accessorKey: "grade",
  },
];