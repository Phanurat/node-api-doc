# ใช้ Node.js base image
FROM node:14

# สร้าง directory สำหรับ app
WORKDIR /usr/src/app

# คัดลอก package.json และ package-lock.json
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอก source code ไปยัง container
COPY . .

# รัน application บนพอร์ต 3000 ภายใน container
EXPOSE 3000
CMD ["npm", "start"]
